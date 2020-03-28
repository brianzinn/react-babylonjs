import React from 'react'
import { Engine, Scene, Skybox } from '../../../dist/react-babylonjs'
import { Vector3, Color3 } from '@babylonjs/core/Maths/math'
import '../../style.css'
import { FresnelParameters } from '@babylonjs/core'

export default { title: 'Textures' };

/**
 * Insipration Playground: https://www.babylonjs-playground.com/#AQZJ4C#0
 */
const WithFresnelParameters= () => {
    let sunnyDayRootUrl = 'assets/textures/TropicalSunnyDay'
    return (
        <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
        <Scene>
            <arcRotateCamera name='Camera' target={new Vector3(0, 0, 0)}
                alpha={0} beta={0}
                radius={10} minZ={0.001} wheelPrecision={50}
                setPosition={[new Vector3(-15, 3, 0)]}
            />

            <pointLight name="Omni0" position={new Vector3(-17.6, 18.8, -49.9)} />
            <Skybox rootUrl={sunnyDayRootUrl} />

            <sphere name='sphere1' position={Vector3.Zero()} segments={32} diameter={3}>
                <standardMaterial name='material1' alpha={0.2} specularPower={16}
                    diffuseColor={Color3.Black()}
                    emissiveColor={new Color3(0.5, 0.5, 0.5)}
                    reflectionFresnelParameters={FresnelParameters.Parse({
                        isEnabled: true,
                        leftColor: [1, 1, 1],
                        rightColor: [0, 0, 0],
                        bias: 0.1,
                        power: 1
                    })}
                    emissiveFresnelParameters={FresnelParameters.Parse({
                        isEnabled: true,
                        leftColor: [1, 1, 1],
                        rightColor: [0, 0, 0],
                        bias: 0.5,
                        power: 4
                    })}
                >
                    <cubeTexture assignTo="reflectionTexture" rootUrl={sunnyDayRootUrl} />
                </standardMaterial>
            </sphere>

            <sphere name='sphere2' position={new Vector3(0, 0, -5)} segments={32} diameter={3}>
                <standardMaterial name='material2' specularPower={32}
                    diffuseColor={Color3.Black()}
                    emissiveColor={new Color3(0.5, 0.5, 0.5)}
                    reflectionFresnelParameters={FresnelParameters.Parse({
                        isEnabled: true,
                        leftColor: [1, 1, 1],
                        rightColor: [0, 0, 0],
                        bias: 0.1,
                        power: 1
                    })}
                    emissiveFresnelParameters={FresnelParameters.Parse({
                        isEnabled: true,
                        leftColor: [1, 1, 1],
                        rightColor: [0, 0, 0],
                        bias: 0.5,
                        power: 4
                    })}
                >
                    <cubeTexture assignTo="reflectionTexture" rootUrl={sunnyDayRootUrl} />
                </standardMaterial>
            </sphere>

            <sphere name='sphere3' position={new Vector3(0, 0, 5)} segments={32} diameter={3}>
                <standardMaterial name='material3' specularPower={64} alpha={0.2}
                    diffuseColor={Color3.Black()}
                    emissiveColor={Color3.White()}
                    emissiveFresnelParameters={FresnelParameters.Parse({
                        isEnabled: true,
                        leftColor: [1, 1, 1],
                        rightColor: [0, 0, 0],
                        bias: 0.2,
                        power: 1
                    })}
                    opacityFresnelParameters={FresnelParameters.Parse({
                        isEnabled: true,
                        leftColor: [1, 1, 1],
                        rightColor: [0, 0, 0],
                        bias: 0,
                        power: 4
                    })}
                >
                </standardMaterial>
            </sphere>

            <sphere name='sphere4' position={new Vector3(5, 0, 0)} segments={32} diameter={3}>
                <standardMaterial name='material4' specularPower={64}
                    diffuseColor={Color3.Black()}
                    emissiveColor={Color3.White()}
                    emissiveFresnelParameters={FresnelParameters.Parse({
                        isEnabled: true,
                        leftColor: [1, 1, 1],
                        rightColor: [0, 0, 0],
                        bias: 0.5,
                        power: 4
                    })}
                >
                    <cubeTexture assignTo="reflectionTexture" rootUrl={sunnyDayRootUrl} />
                </standardMaterial>
            </sphere>

            <sphere name='sphere5' position={new Vector3(-5, 0, 0)} segments={32} diameter={3}>
                <standardMaterial name='material5' specularPower={64}
                    diffuseColor={Color3.Black()}
                    emissiveColor={new Color3(0.2, 0.2, 0.2)}
                    emissiveFresnelParameters={FresnelParameters.Parse({
                        isEnabled: true,
                        leftColor: [1, 1, 1],
                        rightColor: [0, 0, 0],
                        bias: 0.4,
                        power: 2
                    })}
                >
                    <cubeTexture level={0.5} assignTo="reflectionTexture" rootUrl={sunnyDayRootUrl} />
                </standardMaterial>
            </sphere>
        </Scene>
        </Engine>
    )
}

export const FresnelParametersStory = () => (
    <div style={{ flex: 1, display: 'flex' }}>
        <WithFresnelParameters />
    </div>
)
