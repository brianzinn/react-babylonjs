import {
  FresnelParameters,
  Texture,
  Color3,
  Vector3,
  Mesh,
  PhysicsShapeType,
  PhysicsAggregate,
  Nullable,
} from '@babylonjs/core'
import { AdvancedDynamicTexture } from '@babylonjs/gui'
import { useRef, useEffect, FC } from 'react'

type BouncySphereProps = {
  fontsReady: boolean
  position: Vector3
  name: string
  color: Color3
}

const BouncySphere: FC<BouncySphereProps> = ({ fontsReady, position, name, color }) => {
  const sphereAggRef = useRef<Nullable<PhysicsAggregate>>(null)
  const adtRef = useRef<AdvancedDynamicTexture | null>(null)

  useEffect(() => {
    if (adtRef.current) {
      console.log('marking dirty')
      adtRef.current!.markAsDirty()
    } else {
      console.log('no ref')
    }
  }, [fontsReady, adtRef])

  const onButtonClicked = () => {
    if (sphereAggRef.current) {
      sphereAggRef.current.body!.applyImpulse(
        Vector3.Up().scale(10),
        sphereAggRef.current.transformNode.getAbsolutePosition()
      )
    }
  }

  return (
    <sphere name={`${name}-sphere`} diameter={2} segments={16} position={position}>
      <physicsAggregate
        ref={sphereAggRef}
        type={PhysicsShapeType.SPHERE}
        _options={{ mass: 1, restitution: 0.9 }}
      />
      <standardMaterial
        name={`${name}-material`}
        specularPower={16}
        diffuseColor={Color3.Black()}
        emissiveColor={color}
        reflectionFresnelParameters={FresnelParameters.Parse({
          isEnabled: true,
          leftColor: [1, 1, 1],
          rightColor: [0, 0, 0],
          bias: 0.1,
          power: 1,
        })}
      />
      <plane
        name={`${name}-dialog`}
        size={2}
        position={new Vector3(0, 1.5, 0)}
        sideOrientation={Mesh.BACKSIDE}
      >
        <advancedDynamicTexture
          name="dialogTexture"
          ref={adtRef}
          height={1024}
          width={1024}
          createForParentMesh={true}
          hasAlpha={true}
          generateMipMaps={true}
          samplingMode={Texture.TRILINEAR_SAMPLINGMODE}
        >
          <rectangle name={`${name}-rect`} height={0.5} width={1} thickness={12} cornerRadius={12}>
            <rectangle>
              <babylon-button
                name={`${name}-close-icon`}
                background="green"
                onPointerDownObservable={onButtonClicked}
              >
                <textBlock
                  text={`${fontsReady ? '\uf00d' : 'X'} click ${name}`}
                  fontFamily="FontAwesome"
                  fontStyle="bold"
                  fontSize={200}
                  color="white"
                />
              </babylon-button>
            </rectangle>
          </rectangle>
        </advancedDynamicTexture>
      </plane>
    </sphere>
  )
}

export default BouncySphere
