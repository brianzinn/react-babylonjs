import { PropsHandler } from "./SceneComponent"
import { Control } from 'babylonjs-gui'

export type ControlProps = {
    paddingLeft?: string | number
    paddingRight?: string | number
    paddingTop?: string | number
    paddingBottom?: string | number
    width?: string | number
    height?: string | number
    horizontalAlignment?: number
    verticalAlignment?: number
}

export default class ControlPropsHandler implements PropsHandler<Control, ControlProps> {
  handle(target: Control, props: ControlProps): void {
    if (props.paddingLeft && target) {
        if (!target.paddingLeft || target.paddingLeft !== props.paddingLeft) {
            console.log(`setting paddingLeft on ${target.name} to:`, props.paddingLeft)
            target.paddingLeft = props.paddingLeft
        }
    }

    if (props.paddingRight && target) {
        if (!target.paddingRight || target.paddingRight !== props.paddingRight) {
            console.log(`setting paddingRight on ${target.name} to:`, props.paddingRight)
            target.paddingRight = props.paddingRight
        }
    }

    if (props.paddingTop && target) {
        if (!target.paddingTop || target.paddingTop !== props.paddingTop) {
            console.log(`setting paddingTop on ${target.name} to:`, props.paddingTop)
            target.paddingTop = props.paddingTop
        }
    }

    if (props.paddingBottom && target) {
        if (!target.paddingBottom || target.paddingBottom !== props.paddingBottom) {
            console.log(`setting background on ${target.name} to:`, props.paddingBottom)
            target.paddingBottom = props.paddingBottom
        }
    }

    if (target) {
        if (props.height) {
            if (!target.height || target.height !== props.height) {
                console.log(`setting height on ${target.name} to:`, props.height)
                target.height = props.height
            }
        } else {
            target.height = '100%'
        }
    }

    if (target) {
        if (props.width) {
            if (!target.width || target.width !== props.width) {
                console.log(`setting width on ${target.name} to:`, props.width)
                target.width = props.width
            }
        } else {
            target.width = '100%'
        }
    }

    if (target) {
        // 0 is falsey
        if (props.horizontalAlignment !== undefined) {
            if (target.horizontalAlignment !== props.horizontalAlignment) {
                console.log(`setting horizontalAlignment on ${target.name} to:`, props.horizontalAlignment)
                target.horizontalAlignment = props.horizontalAlignment
            } else {
                console.log('not setting horizontal either:', target.horizontalAlignment, props.horizontalAlignment)
            }
        } else {
            console.log('not setting horizontalAlignment:', props);
        }

        // 0 is falsey
        if (props.verticalAlignment !== undefined) {
            if (target.verticalAlignment !== props.verticalAlignment) {
                console.log(`setting verticalAlignment on ${target.name} to:`, props.verticalAlignment)
                target.verticalAlignment = props.verticalAlignment
            } else {
                console.log('not setting vertical either:', target.verticalAlignment, props.verticalAlignment)
            }
        }
        else {
            console.log('not setting verticalAlignment:', props);
        }
    }
  }
}
