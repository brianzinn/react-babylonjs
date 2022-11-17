import { Camera } from '@babylonjs/core/Cameras/camera.js'
import { Ray } from '@babylonjs/core/Culling/ray.js'
import { Frustum } from '@babylonjs/core/Maths/math.frustum.js'
import { Matrix, Vector3 } from '@babylonjs/core/Maths/math.vector.js'
import { AbstractMesh } from '@babylonjs/core/Meshes/abstractMesh.js'
import React, {
  CSSProperties,
  forwardRef,
  HTMLAttributes,
  MutableRefObject,
  ReactNode,
  Ref,
  RefObject,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
// import {  unmountComponentAtNode } from 'react-dom'
import { createRoot } from 'react-dom/client'
import { FiberAbstractMeshProps, FiberAbstractMeshPropsCtor } from '../generatedProps'
import { useAfterRender } from '../hooks/render'
import { useScene } from '../hooks/scene'

function defaultCalculatePosition(el: AbstractMesh, camera: Camera) {
  const objectPos = el.getAbsolutePosition()
  const engine = camera.getEngine()
  const viewport = camera.viewport.toGlobal(engine.getRenderWidth(), engine.getRenderHeight())
  const screenPos = Vector3.Project(
    objectPos,
    Matrix.Identity(),
    camera.getTransformationMatrix(),
    viewport
  )

  return [
    screenPos.x * engine.getHardwareScalingLevel(),
    screenPos.y * engine.getHardwareScalingLevel(),
  ]
}

export type CalculatePosition = typeof defaultCalculatePosition

function isObjectBehindCamera(el: AbstractMesh, camera: Camera) {
  const planes = Frustum.GetPlanes(camera.getTransformationMatrix())
  const center = el.absolutePosition
  const outsideFrustum = planes.findIndex((x) => x.dotCoordinate(center) < 0) === -1 ? false : true // taken from : https://forum.babylonjs.com/t/check-if-vector3-is-in-frustum/8652/3

  return outsideFrustum
}

function isObjectVisible(el: AbstractMesh, camera: Camera, occlude: AbstractMesh[]) {
  const objectPos = el.getAbsolutePosition()
  const cameraPos = camera.globalPosition
  const ray = new Ray(cameraPos, objectPos.subtract(cameraPos), undefined)

  const hit = camera
    .getScene()
    .pickWithRay(
      ray,
      (m) =>
        (occlude.length > 0 ? occlude.indexOf(m) !== -1 : m !== el.parent) && m.name !== 'skybox'
    )

  // console.log(hit);
  return hit
    ? hit.pickedMesh?.name === el.parent?.name ||
        hit.distance * hit.distance >= Vector3.DistanceSquared(objectPos, cameraPos)
    : false
}

function objectScale(el: AbstractMesh, camera: Camera) {
  if (camera.mode === Camera.ORTHOGRAPHIC_CAMERA) {
    return 1 //camera.zoom
  } else if (camera.mode === Camera.PERSPECTIVE_CAMERA) {
    const objectPos = el.getAbsolutePosition()
    const cameraPos = camera.globalPosition
    const vFOV = (camera.fov * Math.PI) / 180
    const dist = Vector3.Distance(objectPos, cameraPos)
    const scaleFOV = 2 * Math.tan(vFOV / 2) * dist
    return 1 / scaleFOV
  } else {
    return 1
  }
}

function objectZIndex(el: AbstractMesh, camera: Camera, zIndexRange: Array<number>) {
  if (camera.mode === Camera.PERSPECTIVE_CAMERA || camera.mode === Camera.ORTHOGRAPHIC_CAMERA) {
    const objectPos = el.getAbsolutePosition()
    const cameraPos = camera.globalPosition
    const dist = Vector3.Distance(objectPos, cameraPos)
    const A = (zIndexRange[1] - zIndexRange[0]) / (camera.maxZ - camera.minZ)
    const B = zIndexRange[1] - A * camera.maxZ
    return Math.round(A * dist + B)
  }
  return undefined
}

const epsilon = (value: number) => (Math.abs(value) < 1e-10 ? 0 : value)

function getCSSMatrix(matrix: Matrix, multipliers: number[], prepend = '') {
  let matrix3d = 'matrix3d('
  for (let i = 0; i !== 16; i++) {
    matrix3d += epsilon(multipliers[i] * matrix.m[i]) + (i !== 15 ? ',' : ')')
  }
  return prepend + matrix3d
}

const getCameraCSSMatrix = ((multipliers: number[]) => {
  return (matrix: Matrix) => getCSSMatrix(matrix, multipliers)
})([1, -1, 1, 1, 1, -1, 1, 1, 1, -1, 1, 1, 1, -1, 1, 1])

const getObjectCSSMatrix = ((scaleMultipliers: (n: number) => number[]) => {
  return (matrix: Matrix, factor: number) =>
    getCSSMatrix(matrix, scaleMultipliers(factor), 'translate(-50%,-50%)')
})((f: number) => [
  1 / f,
  1 / f,
  1 / f,
  1,
  -1 / f,
  -1 / f,
  -1 / f,
  -1,
  1 / f,
  1 / f,
  1 / f,
  1,
  1,
  1,
  1,
  1,
])
type PointerEventsProperties =
  | 'auto'
  | 'none'
  | 'visiblePainted'
  | 'visibleFill'
  | 'visibleStroke'
  | 'visible'
  | 'painted'
  | 'fill'
  | 'stroke'
  | 'all'
  | 'inherit'

type HtmlPropsExtension = HTMLAttributes<HTMLDivElement> &
  FiberAbstractMeshProps &
  FiberAbstractMeshPropsCtor
export interface HtmlProps extends Omit<HtmlPropsExtension, 'ref'> {
  babylonChildren?: ReactNode
  prepend?: boolean
  center?: boolean
  fullscreen?: boolean
  eps?: number
  portal?: MutableRefObject<HTMLElement>
  distanceFactor?: number
  sprite?: boolean
  transform?: boolean
  zIndexRange?: Array<number>
  occlude?: RefObject<AbstractMesh>[] | boolean
  onOcclude?: (visible: boolean) => void
  calculatePosition?: CalculatePosition
  as?: string
  pointerEvents?: PointerEventsProperties
}

const Html = forwardRef(
  (
    {
      children,
      babylonChildren,
      eps = 0.001,
      style,
      className,
      prepend,
      center,
      fullscreen,
      portal,
      distanceFactor,
      sprite = false,
      transform = false,
      occlude,
      onOcclude,
      zIndexRange = [16777271, 0],
      calculatePosition = defaultCalculatePosition,
      as = 'div',
      pointerEvents,
      ...props
    }: HtmlProps,
    ref: Ref<HTMLDivElement>
  ) => {
    const scene = useScene()
    const canvas = scene?.getEngine().getRenderingCanvas()
    const clientRect = scene?.getEngine().getRenderingCanvasClientRect()
    const size = { width: clientRect?.width ?? 1, height: clientRect?.height ?? 1 }

    const [el] = useState(() => document.createElement(as))
    const group = useRef<AbstractMesh>(null)
    const oldZoom = useRef(0)
    const oldPosition = useRef([0, 0])
    const transformOuterRef = useRef<HTMLDivElement>(null!)
    const transformInnerRef = useRef<HTMLDivElement>(null!)
    const target = portal?.current ?? canvas?.parentNode

    useEffect(() => {
      if (scene && group.current) {
        const node = group.current as AbstractMesh
        const camera = scene?.activeCamera
        if (camera && clientRect) {
          //scene.updateMatrixWorld()
          if (transform) {
            el.style.cssText = `position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;`
          } else {
            const vec = calculatePosition(node, camera)
            el.style.cssText = `position:absolute;top:0;left:0;transform:translate3d(${vec[0]}px,${vec[1]}px,0);transform-origin:0 0;`
          }

          if (target) {
            if (prepend) target.prepend(el)
            else target.appendChild(el)
          }
        }
        return () => {
          if (target) target.removeChild(el)
          // unmountComponentAtNode(el) // react17
        }
      }
    }, [target, transform, scene, group])

    const styles: CSSProperties = useMemo(() => {
      if (transform) {
        return {
          position: 'absolute',
          top: 0,
          left: 0,
          width: size.width,
          height: size.height,
          transformStyle: 'preserve-3d',
          pointerEvents: 'none',
        }
      } else {
        return {
          position: 'absolute',
          transform: center ? 'translate3d(-50%,-50%,0)' : 'none',
          ...(fullscreen && {
            top: -size.height / 2,
            left: -size.width / 2,
            width: size.width,
            height: size.height,
          }),
          ...style,
        }
      }
    }, [style, center, fullscreen, size, transform])

    const transformInnerStyles: CSSProperties = useMemo(
      () => ({ position: 'absolute', pointerEvents: pointerEvents }),
      [pointerEvents]
    )

    useLayoutEffect(() => {
      const root = createRoot(el)
      if (transform) {
        root.render(
          <div id="html_babylon" ref={transformOuterRef} style={styles}>
            <div ref={transformInnerRef} style={transformInnerStyles}>
              <div ref={ref} className={className} style={style} children={children} />
            </div>
          </div>
        )
      } else {
        root.render(
          <div
            id="html_babylon"
            ref={ref}
            style={styles}
            className={className}
            children={children}
          />
        )
      }
      return () => {
        root.unmount()
      }
    })

    const visible = useRef(true)

    useAfterRender(() => {
      const camera = scene?.activeCamera

      if (camera && group.current) {
        const node = group.current as AbstractMesh
        node.computeWorldMatrix(true)
        const vec = transform ? oldPosition.current : calculatePosition(node, camera)

        el.style.display = visible.current && node.isEnabled(true) ? 'block' : 'none'

        if (
          isNaN(vec[0]) === false &&
          (transform ||
            Math.abs(oldZoom.current - camera.fov) > eps ||
            Math.abs(oldPosition.current[0] - vec[0]) > eps ||
            Math.abs(oldPosition.current[1] - vec[1]) > eps)
        ) {
          const isBehindCamera = isObjectBehindCamera(node, camera)

          let raytraceTarget: null | undefined | boolean | AbstractMesh[] = false
          if (typeof occlude === 'boolean') {
            if (occlude === true) {
              raytraceTarget = scene?.meshes
            }
          } else if (Array.isArray(occlude)) {
            raytraceTarget = occlude.map((item) => item.current) as AbstractMesh[]
          }

          const previouslyVisible = visible.current
          if (raytraceTarget) {
            const isvisible = isObjectVisible(node, camera, raytraceTarget)
            visible.current = isvisible && !isBehindCamera
          } else {
            visible.current = !isBehindCamera
          }

          if (previouslyVisible !== visible.current) {
            if (onOcclude) onOcclude(!visible.current)
            else {
              el.style.display = visible.current && node.isEnabled(true) ? 'block' : 'none'
              group.current.isVisible = visible.current
            }
          }

          el.style.zIndex = `${objectZIndex(node, camera, zIndexRange)}`
          if (transform) {
            const [widthHalf, heightHalf] = [size.width / 2, size.height / 2]
            const fov = camera.getProjectionMatrix().m[5] * heightHalf
            const { mode, orthoTop, orthoLeft, orthoBottom, orthoRight } = camera
            const cameraInvertMatrix = camera.getWorldMatrix().invert()
            const cameraMatrix = getCameraCSSMatrix(cameraInvertMatrix)
            const cameraTransform =
              mode === Camera.ORTHOGRAPHIC_CAMERA
                ? `scale(${fov})translate(${epsilon(-(orthoRight! + orthoLeft!) / 2)}px,${epsilon(
                    (orthoTop! + orthoBottom!) / 2
                  )}px)`
                : `translateZ(${fov}px)`
            let matrix = node.getWorldMatrix()
            if (sprite) {
              matrix = camera.getViewMatrix().getRotationMatrix().invert().clone()

              //   matrix = cameraInvertMatrix.clone().transpose().copy.copyPosition(matrix).scale(node.scale)
              //   matrix.m[3] = matrix.m[7] = matrix.m[11] = 0
              //   matrix.m[15] = 1
            }
            el.style.width = size.width + 'px'
            el.style.height = size.height + 'px'
            el.style.perspective = mode === Camera.ORTHOGRAPHIC_CAMERA ? '' : `${fov}px`
            if (transformOuterRef.current && transformInnerRef.current) {
              transformOuterRef.current.style.transform = `${cameraTransform}${cameraMatrix}translate(${widthHalf}px,${heightHalf}px)`
              transformInnerRef.current.style.transform = getObjectCSSMatrix(
                matrix,
                1 / ((distanceFactor || 10) / 400)
              )
            }
          } else {
            const scale =
              distanceFactor === undefined ? 1 : objectScale(node, camera) * distanceFactor
            el.style.transform = `translate3d(${vec[0]}px,${vec[1]}px,0) scale(${scale})`
          }
          oldPosition.current = vec
          oldZoom.current = camera.fov
        }
      }
    })

    return (
      <abstractMesh {...props} ref={group}>
        {babylonChildren}
      </abstractMesh>
    )
  }
)

export default Html
