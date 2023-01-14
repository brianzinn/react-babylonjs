import { FresnelParameters } from '@babylonjs/core/Materials/fresnelParameters'
import { Texture } from '@babylonjs/core/Materials/Textures/texture'
import { Color3 } from '@babylonjs/core/Maths/math.color'
import { Vector3 } from '@babylonjs/core/Maths/math.vector'
import { Mesh } from '@babylonjs/core/Meshes/mesh'
import { PhysicsImpostor } from '@babylonjs/core/Physics/physicsImpostor'
import { Nullable } from '@babylonjs/core/types'
import { AdvancedDynamicTexture } from '@babylonjs/gui/2D/advancedDynamicTexture'
import { useRef, useEffect, FC } from 'react'

type BouncySphereProps = {
  fontsReady: boolean
  position: Vector3
  name: string
  color: Color3
}

const BouncySphere: FC<BouncySphereProps> = ({ fontsReady, position, name, color }) => {
  const sphereRef = useRef<Nullable<Mesh>>(null)
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
    if (sphereRef.current) {
      sphereRef.current.physicsImpostor!.applyImpulse(
        Vector3.Up().scale(10),
        sphereRef.current.getAbsolutePosition()
      )
    }
  }

  return (
    <sphere ref={sphereRef} name={`${name}-sphere`} diameter={2} segments={16} position={position}>
      <physicsImpostor
        type={PhysicsImpostor.SphereImpostor}
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
