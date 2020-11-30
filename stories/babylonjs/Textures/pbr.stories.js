import React, { useCallback, useState } from 'react'
import { Engine, Scene} from '../../../dist/react-babylonjs'

import { Vector3, Color3 } from '@babylonjs/core/Maths/math'
import '../../style.css'
import { FresnelParameters, Texture, CubeTexture } from '@babylonjs/core'

export default { title: 'Textures' };

var hdrTexture = null;
var hdrTextureClone = null;
const onSceneMounted = (createdArgs) => {
    createdArgs.scene.imageProcessingConfiguration.exposure=.6;
    createdArgs.scene.imageProcessingConfiguration.contrast=1.6;
}

/**
 * Official Demo: https://www.babylonjs.com/demos/pbr/
 */
const WithPBR = () => {
    let environmentUrl = 'assets/textures/environment.dds'

    const [_, setTexturesLoaded] = useState(false);

    const hdrTextureRef = useCallback(node => {
        console.log('hdrTexture', node)
        hdrTexture = node;

        hdrTextureClone = hdrTexture.clone();
        hdrTextureClone.coordinatesMode = Texture.SKYBOX_MODE;

        setTexturesLoaded(true); // trigger render and props assignment
    }, []);

    return (
        <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
        <Scene onSceneMount={onSceneMounted}>
            <arcRotateCamera name='Camera' target={Vector3.Zero()}
                alpha={-Math.PI/4} beta={Math.PI/2.5}
                radius={200} minZ={0.1}
            />

            <hemisphericLight name="light1" intensity={0.7} direction={Vector3.Up()} />
            <cubeTexture ref={hdrTextureRef} name="hdrTexture" rootUrl={environmentUrl} createPolynomials={true}
                format={undefined} prefiltered={true}
            />

            <box name="hdrSkyBox" size={1000} infiniteDistance>
                <pbrMaterial name="skyBox" backFaceCulling={false} reflectionTexture={hdrTextureClone} microSurface={1} disableLighting />
            </box>

            <sphere name='sphereGlass' segments={48} diameter={30} translate={[new Vector3(1, 0, 0), -60]}>
                <pbrMaterial name="glass" reflectionTexture={hdrTexture} refractionTexture={hdrTexture} linkRefractionWithTransparency
                    indexOfRefraction={.52} alpha={0} microSurface={1} reflectivityColor={new Color3(.2, .2, .2)} albedoColor={new Color3(.85, .85, .85)}
                />
            </sphere>

            <sphere name='sphereMetal' segments={48} diameter={30} translate={[new Vector3(1, 0, 0), 60]}>
                <pbrMaterial name="metal" reflectionTexture={hdrTexture} microSurface={0.96}
                    reflectivityColor={new Color3(.85, .85, .85)}
                    albedoColor={new Color3(.01, .01, .01)}
                />
            </sphere>

            <sphere name='spherePlastic' segments={48} diameter={30} translate={[new Vector3(0, 0, 1), -60]}>
                <pbrMaterial name="metal" reflectionTexture={hdrTexture} microSurface={0.96}
                    albedoColor={new Color3(.206, .94, 1)} reflectivityColor={new Color3(.003, .003, .003)}
                />
            </sphere>

            <sphere name='sphereGlass' segments={48} diameter={30} translate={[new Vector3(0, 0, 1), 60]}>
                <pbrMaterial name="glass" reflectionTexture={hdrTexture} linkRefractionWithTransparency
                    indexOfRefraction={.52} alpha={0} microSurface={1} reflectivityColor={new Color3(.2, .2, .2)} albedoColor={new Color3(.85, .85, .85)}
                />
            </sphere>

            <box name="plane" width={65} height={1} depth={65}>
                <pbrMaterial name="wood" reflectionTexture={hdrTexture} environmentIntensity={1} specularIntensity={.3}
                    albedoColor={Color3.White()} useMicroSurfaceFromReflectivityMapAlpha
                >
                    <texture url="assets/textures/reflectivity.png" assignTo="reflectivityTexture" />
                    <texture url="assets/textures/albedo.png" assignTo="albedoTexture" />
                </pbrMaterial>
            </box>
        </Scene>
        </Engine>
    )
}

export const PBR = () => (
    <div style={{ flex: 1, display: 'flex' }}>
        <WithPBR />
    </div>
)
