import { android as androidApp } from "tns-core-modules/application";
import { isAndroid } from "tns-core-modules/platform";
declare let com: any;
declare let android: any;

declare let DGActivityIndicatorView: any;
declare let DGActivityIndicatorAnimationTypeDoubleBounce: any;
declare let UIColor: any;
declare let CGRectMake: any;
// Row 1

// BallPulseIndicator
// BallGridPulseIndicator
// BallClipRotateIndicator
// BallClipRotatePulseIndicator
export function onCreatingBallClipRotateIndicator(args) {

    let indicatorView = new com.wang.avi.AVLoadingIndicatorView(androidApp.context);

    indicatorView.setIndicator("BallClipRotateIndicator");
    indicatorView.setIndicatorColor(android.graphics.Color.WHITE);

    args.view = indicatorView;

}

export function onCreatingBallGridPulseIndicator(args) {
    let indicatorView = new com.wang.avi.AVLoadingIndicatorView(androidApp.context);

    indicatorView.setIndicator("BallGridPulseIndicator");
    indicatorView.setIndicatorColor(android.graphics.Color.WHITE);

    args.view = indicatorView;
}
export function onCreatingBallPulseIndicator(args) {
    let indicatorView = new com.wang.avi.AVLoadingIndicatorView(androidApp.context);

    indicatorView.setIndicator("BallPulseIndicator");
    indicatorView.setIndicatorColor(android.graphics.Color.WHITE);

    args.view = indicatorView;
}
export function onCreatingBallClipRotatePulseIndicator(args) {
    let indicatorView = new com.wang.avi.AVLoadingIndicatorView(androidApp.context);

    indicatorView.setIndicator("BallClipRotatePulseIndicator");
    indicatorView.setIndicatorColor(android.graphics.Color.WHITE);

    args.view = indicatorView;
}


Row 2
SquareSpinIndicator
BallClipRotateMultipleIndicator
BallPulseRiseIndicator
BallRotateIndicator

export function onCreatingSquareSpinIndicator(args) {
    let indicatorView = new com.wang.avi.AVLoadingIndicatorView(androidApp.context);

    indicatorView.setIndicator("SquareSpinIndicator");
    indicatorView.setIndicatorColor(android.graphics.Color.WHITE);

    args.view = indicatorView;
}
export function onCreatingBallClipRotateMultipleIndicator(args) {
    let indicatorView = new com.wang.avi.AVLoadingIndicatorView(androidApp.context);

    indicatorView.setIndicator("BallClipRotateMultipleIndicator");
    indicatorView.setIndicatorColor(android.graphics.Color.WHITE);

    args.view = indicatorView;
}
export function onCreatingBallPulseRiseIndicator(args) {
    let indicatorView = new com.wang.avi.AVLoadingIndicatorView(androidApp.context);

    indicatorView.setIndicator("BallPulseRiseIndicator");
    indicatorView.setIndicatorColor(android.graphics.Color.WHITE);

    args.view = indicatorView;
}
export function onCreatingBallRotateIndicator(args) {
    let indicatorView = new com.wang.avi.AVLoadingIndicatorView(androidApp.context);

    indicatorView.setIndicator("BallRotateIndicator");
    indicatorView.setIndicatorColor(android.graphics.Color.WHITE);

    args.view = indicatorView;
}

// Row 3
// CubeTransitionIndicator
// BallZigZagIndicator
// BallZigZagDeflectIndicator
// BallTrianglePathIndicator

export function onCreatingCubeTransitionIndicator(args) {
    let indicatorView = new com.wang.avi.AVLoadingIndicatorView(androidApp.context);

    indicatorView.setIndicator("CubeTransitionIndicator");
    indicatorView.setIndicatorColor(android.graphics.Color.WHITE);

    args.view = indicatorView;
}
export function onCreatingBallZigZagIndicator(args) {
    let indicatorView = new com.wang.avi.AVLoadingIndicatorView(androidApp.context);

    indicatorView.setIndicator("BallZigZagIndicator");
    indicatorView.setIndicatorColor(android.graphics.Color.WHITE);

    args.view = indicatorView;
}
export function onCreatingBallZigZagDeflectIndicator(args) {
    let indicatorView = new com.wang.avi.AVLoadingIndicatorView(androidApp.context);

    indicatorView.setIndicator("BallZigZagDeflectIndicator");
    indicatorView.setIndicatorColor(android.graphics.Color.WHITE);

    args.view = indicatorView;
}
export function onCreatingBallTrianglePathIndicator(args) {
    let indicatorView = new com.wang.avi.AVLoadingIndicatorView(androidApp.context);

    indicatorView.setIndicator("BallTrianglePathIndicator");
    indicatorView.setIndicatorColor(android.graphics.Color.WHITE);

    args.view = indicatorView;
}

Row 4
BallScaleIndicator
LineScaleIndicator
LineScalePartyIndicator
BallScaleMultipleIndicator

export function onCreatingBallScaleIndicator(args) {
    let indicatorView = new com.wang.avi.AVLoadingIndicatorView(androidApp.context);

    indicatorView.setIndicator("BallScaleIndicator");
    indicatorView.setIndicatorColor(android.graphics.Color.WHITE);

    args.view = indicatorView;
}
export function onCreatingLineScaleIndicator(args) {
    let indicatorView = new com.wang.avi.AVLoadingIndicatorView(androidApp.context);

    indicatorView.setIndicator("LineScaleIndicator");
    indicatorView.setIndicatorColor(android.graphics.Color.WHITE);

    args.view = indicatorView;
}
export function onCreatingLineScalePartyIndicator(args) {
    let indicatorView = new com.wang.avi.AVLoadingIndicatorView(androidApp.context);

    indicatorView.setIndicator("LineScalePartyIndicator");
    indicatorView.setIndicatorColor(android.graphics.Color.WHITE);

    args.view = indicatorView;
}
export function onCreatingBallScaleMultipleIndicator(args) {
    let indicatorView = new com.wang.avi.AVLoadingIndicatorView(androidApp.context);

    indicatorView.setIndicator("BallScaleMultipleIndicator");
    indicatorView.setIndicatorColor(android.graphics.Color.WHITE);

    args.view = indicatorView;
}

// Row 5
// BallPulseSyncIndicator
// BallBeatIndicator
// LineScalePulseOutIndicator
// LineScalePulseOutRapidIndicator

export function onCreatingBallPulseSyncIndicator(args) {
    let indicatorView = new com.wang.avi.AVLoadingIndicatorView(androidApp.context);

    indicatorView.setIndicator("BallPulseSyncIndicator");
    indicatorView.setIndicatorColor(android.graphics.Color.WHITE);

    args.view = indicatorView;
}
export function onCreatingBallBeatIndicator(args) {
    let indicatorView = new com.wang.avi.AVLoadingIndicatorView(androidApp.context);

    indicatorView.setIndicator("BallBeatIndicator");
    indicatorView.setIndicatorColor(android.graphics.Color.WHITE);

    args.view = indicatorView;
}
export function onCreatingLineScalePulseOutIndicator(args) {
    let indicatorView = new com.wang.avi.AVLoadingIndicatorView(androidApp.context);

    indicatorView.setIndicator("LineScalePulseOutIndicator");
    indicatorView.setIndicatorColor(android.graphics.Color.WHITE);

    args.view = indicatorView;
}
export function onCreatingLineScalePulseOutRapidIndicator(args) {
    let indicatorView = new com.wang.avi.AVLoadingIndicatorView(androidApp.context);

    indicatorView.setIndicator("LineScalePulseOutRapidIndicator");
    indicatorView.setIndicatorColor(android.graphics.Color.WHITE);

    args.view = indicatorView;
}

// Row 6
// BallScaleRippleIndicator
// BallScaleRippleMultipleIndicator
// BallSpinFadeLoaderIndicator
// LineSpinFadeLoaderIndicator

export function onCreatingBallScaleRippleIndicator(args) {
    let indicatorView = new com.wang.avi.AVLoadingIndicatorView(androidApp.context);

    indicatorView.setIndicator("BallScaleRippleIndicator");
    indicatorView.setIndicatorColor(android.graphics.Color.WHITE);

    args.view = indicatorView;
}
export function onCreatingBallScaleRippleMultipleIndicator(args) {
    let indicatorView = new com.wang.avi.AVLoadingIndicatorView(androidApp.context);

    indicatorView.setIndicator("BallScaleRippleMultipleIndicator");
    indicatorView.setIndicatorColor(android.graphics.Color.WHITE);

    args.view = indicatorView;
}
export function onCreatingBallSpinFadeLoaderIndicator(args) {
    let indicatorView = new com.wang.avi.AVLoadingIndicatorView(androidApp.context);

    indicatorView.setIndicator("BallSpinFadeLoaderIndicator");
    indicatorView.setIndicatorColor(android.graphics.Color.WHITE);

    args.view = indicatorView;
}
export function onCreatingLineSpinFadeLoaderIndicator(args) {
    let indicatorView = new com.wang.avi.AVLoadingIndicatorView(androidApp.context);

    indicatorView.setIndicator("LineSpinFadeLoaderIndicator");
    indicatorView.setIndicatorColor(android.graphics.Color.WHITE);

    args.view = indicatorView;
}

// Row 7
// TriangleSkewSpinIndicator
// PacmanIndicator
// BallGridBeatIndicator
// SemiCircleSpinIndicator

export function onCreatingTriangleSkewSpinIndicator(args) {
    let indicatorView = new com.wang.avi.AVLoadingIndicatorView(androidApp.context);

    indicatorView.setIndicator("TriangleSkewSpinIndicator");
    indicatorView.setIndicatorColor(android.graphics.Color.WHITE);

    args.view = indicatorView;
}
export function onCreatingPacmanIndicator(args) {
    let indicatorView = new com.wang.avi.AVLoadingIndicatorView(androidApp.context);

    indicatorView.setIndicator("PacmanIndicator");
    indicatorView.setIndicatorColor(android.graphics.Color.WHITE);

    args.view = indicatorView;
}
export function onCreatingBallGridBeatIndicator(args) {
    let indicatorView = new com.wang.avi.AVLoadingIndicatorView(androidApp.context);

    indicatorView.setIndicator("BallGridBeatIndicator");
    indicatorView.setIndicatorColor(android.graphics.Color.WHITE);

    args.view = indicatorView;
}
export function onCreatingSemiCircleSpinIndicator(args) {
    let indicatorView = new com.wang.avi.AVLoadingIndicatorView(androidApp.context);

    indicatorView.setIndicator("SemiCircleSpinIndicator");
    indicatorView.setIndicatorColor(android.graphics.Color.WHITE);

    args.view = indicatorView;
}

// export function onShow() {
//     indicatorView.show();
// }

// export function onHide() {
//     indicatorView.hide();
// }
