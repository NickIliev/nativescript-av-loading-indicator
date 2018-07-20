"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var application_1 = require("tns-core-modules/application");
var platform_1 = require("tns-core-modules/platform");
// Row 1
// BallPulseIndicator
// BallGridPulseIndicator
// BallClipRotateIndicator
// BallClipRotatePulseIndicator
function onCreatingBallClipRotateIndicator(args) {
    if (platform_1.isAndroid) {
        var indicatorView = new com.wang.avi.AVLoadingIndicatorView(application_1.android.context);
        indicatorView.setIndicator("BallClipRotateIndicator");
        indicatorView.setIndicatorColor(android.graphics.Color.WHITE);
        args.view = indicatorView;
    }
    else {
        var indicatorView = DGActivityIndicatorView.alloc().initWithTypeTintColorAndSize(DGActivityIndicatorAnimationTypeDoubleBounce, UIColor.white(), 20);
        indicatorView.frame = CGRectMake(0, 0, 50, 50);
        args.view = indicatorView;
        // DGActivityIndicatorView *activityIndicatorView = [[DGActivityIndicatorView alloc] initWithType:DGActivityIndicatorAnimationTypeDoubleBounce tintColor:[UIColor whiteColor] size:20.0f];
        // activityIndicatorView.frame = CGRectMake(0.0f, 0.0f, 50.0f, 50.0f);
        // [self.view addSubview:activityIndicatorView];
        // [activityIndicatorView startAnimating];
    }
}
exports.onCreatingBallClipRotateIndicator = onCreatingBallClipRotateIndicator;
// export function onCreatingBallGridPulseIndicator(args) {
//     let indicatorView = new com.wang.avi.AVLoadingIndicatorView(androidApp.context);
//     indicatorView.setIndicator("BallGridPulseIndicator");
//     indicatorView.setIndicatorColor(android.graphics.Color.WHITE);
//     args.view = indicatorView;
// }
// export function onCreatingBallPulseIndicator(args) {
//     let indicatorView = new com.wang.avi.AVLoadingIndicatorView(androidApp.context);
//     indicatorView.setIndicator("BallPulseIndicator");
//     indicatorView.setIndicatorColor(android.graphics.Color.WHITE);
//     args.view = indicatorView;
// }
// export function onCreatingBallClipRotatePulseIndicator(args) {
//     let indicatorView = new com.wang.avi.AVLoadingIndicatorView(androidApp.context);
//     indicatorView.setIndicator("BallClipRotatePulseIndicator");
//     indicatorView.setIndicatorColor(android.graphics.Color.WHITE);
//     args.view = indicatorView;
// }
// Row 2
// SquareSpinIndicator
// BallClipRotateMultipleIndicator
// BallPulseRiseIndicator
// BallRotateIndicator
// export function onCreatingSquareSpinIndicator(args) {
//     let indicatorView = new com.wang.avi.AVLoadingIndicatorView(androidApp.context);
//     indicatorView.setIndicator("SquareSpinIndicator");
//     indicatorView.setIndicatorColor(android.graphics.Color.WHITE);
//     args.view = indicatorView;
// }
// export function onCreatingBallClipRotateMultipleIndicator(args) {
//     let indicatorView = new com.wang.avi.AVLoadingIndicatorView(androidApp.context);
//     indicatorView.setIndicator("BallClipRotateMultipleIndicator");
//     indicatorView.setIndicatorColor(android.graphics.Color.WHITE);
//     args.view = indicatorView;
// }
// export function onCreatingBallPulseRiseIndicator(args) {
//     let indicatorView = new com.wang.avi.AVLoadingIndicatorView(androidApp.context);
//     indicatorView.setIndicator("BallPulseRiseIndicator");
//     indicatorView.setIndicatorColor(android.graphics.Color.WHITE);
//     args.view = indicatorView;
// }
// export function onCreatingBallRotateIndicator(args) {
//     let indicatorView = new com.wang.avi.AVLoadingIndicatorView(androidApp.context);
//     indicatorView.setIndicator("BallRotateIndicator");
//     indicatorView.setIndicatorColor(android.graphics.Color.WHITE);
//     args.view = indicatorView;
// }
// Row 3
// CubeTransitionIndicator
// BallZigZagIndicator
// BallZigZagDeflectIndicator
// BallTrianglePathIndicator
// export function onCreatingCubeTransitionIndicator(args) {
//     let indicatorView = new com.wang.avi.AVLoadingIndicatorView(androidApp.context);
//     indicatorView.setIndicator("CubeTransitionIndicator");
//     indicatorView.setIndicatorColor(android.graphics.Color.WHITE);
//     args.view = indicatorView;
// }
// export function onCreatingBallZigZagIndicator(args) {
//     let indicatorView = new com.wang.avi.AVLoadingIndicatorView(androidApp.context);
//     indicatorView.setIndicator("BallZigZagIndicator");
//     indicatorView.setIndicatorColor(android.graphics.Color.WHITE);
//     args.view = indicatorView;
// }
// export function onCreatingBallZigZagDeflectIndicator(args) {
//     let indicatorView = new com.wang.avi.AVLoadingIndicatorView(androidApp.context);
//     indicatorView.setIndicator("BallZigZagDeflectIndicator");
//     indicatorView.setIndicatorColor(android.graphics.Color.WHITE);
//     args.view = indicatorView;
// }
// export function onCreatingBallTrianglePathIndicator(args) {
//     let indicatorView = new com.wang.avi.AVLoadingIndicatorView(androidApp.context);
//     indicatorView.setIndicator("BallTrianglePathIndicator");
//     indicatorView.setIndicatorColor(android.graphics.Color.WHITE);
//     args.view = indicatorView;
// }
// Row 4
// BallScaleIndicator
// LineScaleIndicator
// LineScalePartyIndicator
// BallScaleMultipleIndicator
// export function onCreatingBallScaleIndicator(args) {
//     let indicatorView = new com.wang.avi.AVLoadingIndicatorView(androidApp.context);
//     indicatorView.setIndicator("BallScaleIndicator");
//     indicatorView.setIndicatorColor(android.graphics.Color.WHITE);
//     args.view = indicatorView;
// }
// export function onCreatingLineScaleIndicator(args) {
//     let indicatorView = new com.wang.avi.AVLoadingIndicatorView(androidApp.context);
//     indicatorView.setIndicator("LineScaleIndicator");
//     indicatorView.setIndicatorColor(android.graphics.Color.WHITE);
//     args.view = indicatorView;
// }
// export function onCreatingLineScalePartyIndicator(args) {
//     let indicatorView = new com.wang.avi.AVLoadingIndicatorView(androidApp.context);
//     indicatorView.setIndicator("LineScalePartyIndicator");
//     indicatorView.setIndicatorColor(android.graphics.Color.WHITE);
//     args.view = indicatorView;
// }
// export function onCreatingBallScaleMultipleIndicator(args) {
//     let indicatorView = new com.wang.avi.AVLoadingIndicatorView(androidApp.context);
//     indicatorView.setIndicator("BallScaleMultipleIndicator");
//     indicatorView.setIndicatorColor(android.graphics.Color.WHITE);
//     args.view = indicatorView;
// }
// Row 5
// BallPulseSyncIndicator
// BallBeatIndicator
// LineScalePulseOutIndicator
// LineScalePulseOutRapidIndicator
// export function onCreatingBallPulseSyncIndicator(args) {
//     let indicatorView = new com.wang.avi.AVLoadingIndicatorView(androidApp.context);
//     indicatorView.setIndicator("BallPulseSyncIndicator");
//     indicatorView.setIndicatorColor(android.graphics.Color.WHITE);
//     args.view = indicatorView;
// }
// export function onCreatingBallBeatIndicator(args) {
//     let indicatorView = new com.wang.avi.AVLoadingIndicatorView(androidApp.context);
//     indicatorView.setIndicator("BallBeatIndicator");
//     indicatorView.setIndicatorColor(android.graphics.Color.WHITE);
//     args.view = indicatorView;
// }
// export function onCreatingLineScalePulseOutIndicator(args) {
//     let indicatorView = new com.wang.avi.AVLoadingIndicatorView(androidApp.context);
//     indicatorView.setIndicator("LineScalePulseOutIndicator");
//     indicatorView.setIndicatorColor(android.graphics.Color.WHITE);
//     args.view = indicatorView;
// }
// export function onCreatingLineScalePulseOutRapidIndicator(args) {
//     let indicatorView = new com.wang.avi.AVLoadingIndicatorView(androidApp.context);
//     indicatorView.setIndicator("LineScalePulseOutRapidIndicator");
//     indicatorView.setIndicatorColor(android.graphics.Color.WHITE);
//     args.view = indicatorView;
// }
// Row 6
// BallScaleRippleIndicator
// BallScaleRippleMultipleIndicator
// BallSpinFadeLoaderIndicator
// LineSpinFadeLoaderIndicator
// export function onCreatingBallScaleRippleIndicator(args) {
//     let indicatorView = new com.wang.avi.AVLoadingIndicatorView(androidApp.context);
//     indicatorView.setIndicator("BallScaleRippleIndicator");
//     indicatorView.setIndicatorColor(android.graphics.Color.WHITE);
//     args.view = indicatorView;
// }
// export function onCreatingBallScaleRippleMultipleIndicator(args) {
//     let indicatorView = new com.wang.avi.AVLoadingIndicatorView(androidApp.context);
//     indicatorView.setIndicator("BallScaleRippleMultipleIndicator");
//     indicatorView.setIndicatorColor(android.graphics.Color.WHITE);
//     args.view = indicatorView;
// }
// export function onCreatingBallSpinFadeLoaderIndicator(args) {
//     let indicatorView = new com.wang.avi.AVLoadingIndicatorView(androidApp.context);
//     indicatorView.setIndicator("BallSpinFadeLoaderIndicator");
//     indicatorView.setIndicatorColor(android.graphics.Color.WHITE);
//     args.view = indicatorView;
// }
// export function onCreatingLineSpinFadeLoaderIndicator(args) {
//     let indicatorView = new com.wang.avi.AVLoadingIndicatorView(androidApp.context);
//     indicatorView.setIndicator("LineSpinFadeLoaderIndicator");
//     indicatorView.setIndicatorColor(android.graphics.Color.WHITE);
//     args.view = indicatorView;
// }
// Row 7
// TriangleSkewSpinIndicator
// PacmanIndicator
// BallGridBeatIndicator
// SemiCircleSpinIndicator
// export function onCreatingTriangleSkewSpinIndicator(args) {
//     let indicatorView = new com.wang.avi.AVLoadingIndicatorView(androidApp.context);
//     indicatorView.setIndicator("TriangleSkewSpinIndicator");
//     indicatorView.setIndicatorColor(android.graphics.Color.WHITE);
//     args.view = indicatorView;
// }
// export function onCreatingPacmanIndicator(args) {
//     let indicatorView = new com.wang.avi.AVLoadingIndicatorView(androidApp.context);
//     indicatorView.setIndicator("PacmanIndicator");
//     indicatorView.setIndicatorColor(android.graphics.Color.WHITE);
//     args.view = indicatorView;
// }
// export function onCreatingBallGridBeatIndicator(args) {
//     let indicatorView = new com.wang.avi.AVLoadingIndicatorView(androidApp.context);
//     indicatorView.setIndicator("BallGridBeatIndicator");
//     indicatorView.setIndicatorColor(android.graphics.Color.WHITE);
//     args.view = indicatorView;
// }
// export function onCreatingSemiCircleSpinIndicator(args) {
//     let indicatorView = new com.wang.avi.AVLoadingIndicatorView(androidApp.context);
//     indicatorView.setIndicator("SemiCircleSpinIndicator");
//     indicatorView.setIndicatorColor(android.graphics.Color.WHITE);
//     args.view = indicatorView;
// }
// export function onShow() {
//     indicatorView.show();
// }
// export function onHide() {
//     indicatorView.hide();
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNERBQXFFO0FBQ3JFLHNEQUFzRDtBQVF0RCxRQUFRO0FBRVIscUJBQXFCO0FBQ3JCLHlCQUF5QjtBQUN6QiwwQkFBMEI7QUFDMUIsK0JBQStCO0FBQy9CLDJDQUFrRCxJQUFJO0lBQ2xELEVBQUUsQ0FBQyxDQUFDLG9CQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ1osSUFBSSxhQUFhLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxxQkFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWhGLGFBQWEsQ0FBQyxZQUFZLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUN0RCxhQUFhLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFOUQsSUFBSSxDQUFDLElBQUksR0FBRyxhQUFhLENBQUM7SUFDOUIsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ0osSUFBSSxhQUFhLEdBQUcsdUJBQXVCLENBQUMsS0FBSyxFQUFFLENBQUMsNEJBQTRCLENBQUMsNENBQTRDLEVBQUUsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFBO1FBQ25KLGFBQWEsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRS9DLElBQUksQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDO1FBQzFCLDBMQUEwTDtRQUMxTCxzRUFBc0U7UUFDdEUsZ0RBQWdEO1FBQ2hELDBDQUEwQztJQUM5QyxDQUFDO0FBQ0wsQ0FBQztBQWxCRCw4RUFrQkM7QUFFRCwyREFBMkQ7QUFDM0QsdUZBQXVGO0FBRXZGLDREQUE0RDtBQUM1RCxxRUFBcUU7QUFFckUsaUNB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O0FBRXJFLGlDQUFpQztBQUNqQyxJQUFJO0FBQ0osZ0VBQWdFO0FBQ2hFLHVGQUF1RjtBQUV2RixpRUFBaUU7QUFDakUscUVBQXFFO0FBRXJFLGlDQUFpQztBQUNqQyxJQUFJO0FBQ0osZ0VBQWdFO0FBQ2hFLHVGQUF1RjtBQUV2RixpRUFBaUU7QUFDakUscUVBQXFFO0FBRXJFLGlDQUFpQztBQUNqQyxJQUFJO0FBRUosUUFBUTtBQUNSLDRCQUE0QjtBQUM1QixrQkFBa0I7QUFDbEIsd0JBQXdCO0FBQ3hCLDBCQUEwQjtBQUUxQiw4REFBOEQ7QUFDOUQsdUZBQXVGO0FBRXZGLCtEQUErRDtBQUMvRCxxRUFBcUU7QUFFckUsaUNBQWlDO0FBQ2pDLElBQUk7QUFDSixvREFBb0Q7QUFDcEQsdUZBQXVGO0FBRXZGLHFEQUFxRDtBQUNyRCxxRUFBcUU7QUFFckUsaUNBQWlDO0FBQ2pDLElBQUk7QUFDSiwwREFBMEQ7QUFDMUQsdUZBQXVGO0FBRXZGLDJEQUEyRDtBQUMzRCxxRUFBcUU7QUFFckUsaUNBQWlDO0FBQ2pDLElBQUk7QUFDSiw0REFBNEQ7QUFDNUQsdUZBQXVGO0FBRXZGLDZEQUE2RDtBQUM3RCxxRUFBcUU7QUFFckUsaUNBQWlDO0FBQ2pDLElBQUk7QUFFSiw2QkFBNkI7QUFDN0IsNEJBQTRCO0FBQzVCLElBQUk7QUFFSiw2QkFBNkI7QUFDN0IsNEJBQTRCO0FBQzVCLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbmRyb2lkIGFzIGFuZHJvaWRBcHAgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcbmRlY2xhcmUgbGV0IGNvbTogYW55O1xuZGVjbGFyZSBsZXQgYW5kcm9pZDogYW55O1xuXG5kZWNsYXJlIGxldCBER0FjdGl2aXR5SW5kaWNhdG9yVmlldzogYW55O1xuZGVjbGFyZSBsZXQgREdBY3Rpdml0eUluZGljYXRvckFuaW1hdGlvblR5cGVEb3VibGVCb3VuY2U6IGFueTtcbmRlY2xhcmUgbGV0IFVJQ29sb3I6IGFueTtcbmRlY2xhcmUgbGV0IENHUmVjdE1ha2U6IGFueTtcbi8vIFJvdyAxXG5cbi8vIEJhbGxQdWxzZUluZGljYXRvclxuLy8gQmFsbEdyaWRQdWxzZUluZGljYXRvclxuLy8gQmFsbENsaXBSb3RhdGVJbmRpY2F0b3Jcbi8vIEJhbGxDbGlwUm90YXRlUHVsc2VJbmRpY2F0b3JcbmV4cG9ydCBmdW5jdGlvbiBvbkNyZWF0aW5nQmFsbENsaXBSb3RhdGVJbmRpY2F0b3IoYXJncykge1xuICAgIGlmIChpc0FuZHJvaWQpIHtcbiAgICAgICAgbGV0IGluZGljYXRvclZpZXcgPSBuZXcgY29tLndhbmcuYXZpLkFWTG9hZGluZ0luZGljYXRvclZpZXcoYW5kcm9pZEFwcC5jb250ZXh0KTtcblxuICAgICAgICBpbmRpY2F0b3JWaWV3LnNldEluZGljYXRvcihcIkJhbGxDbGlwUm90YXRlSW5kaWNhdG9yXCIpO1xuICAgICAgICBpbmRpY2F0b3JWaWV3LnNldEluZGljYXRvckNvbG9yKGFuZHJvaWQuZ3JhcGhpY3MuQ29sb3IuV0hJVEUpO1xuXG4gICAgICAgIGFyZ3MudmlldyA9IGluZGljYXRvclZpZXc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGluZGljYXRvclZpZXcgPSBER0FjdGl2aXR5SW5kaWNhdG9yVmlldy5hbGxvYygpLmluaXRXaXRoVHlwZVRpbnRDb2xvckFuZFNpemUoREdBY3Rpdml0eUluZGljYXRvckFuaW1hdGlvblR5cGVEb3VibGVCb3VuY2UsIFVJQ29sb3Iud2hpdGUoKSwgMjApXG4gICAgICAgIGluZGljYXRvclZpZXcuZnJhbWUgPSBDR1JlY3RNYWtlKDAsIDAsIDUwLCA1MCk7XG5cbiAgICAgICAgYXJncy52aWV3ID0gaW5kaWNhdG9yVmlldzsgICAgICBcbiAgICAgICAgLy8gREdBY3Rpdml0eUluZGljYXRvclZpZXcgKmFjdGl2aXR5SW5kaWNhdG9yVmlldyA9IFtbREdBY3Rpdml0eUluZGljYXRvclZpZXcgYWxsb2NdIGluaXRXaXRoVHlwZTpER0FjdGl2aXR5SW5kaWNhdG9yQW5pbWF0aW9uVHlwZURvdWJsZUJvdW5jZSB0aW50Q29sb3I6W1VJQ29sb3Igd2hpdGVDb2xvcl0gc2l6ZToyMC4wZl07XG4gICAgICAgIC8vIGFjdGl2aXR5SW5kaWNhdG9yVmlldy5mcmFtZSA9IENHUmVjdE1ha2UoMC4wZiwgMC4wZiwgNTAuMGYsIDUwLjBmKTtcbiAgICAgICAgLy8gW3NlbGYudmlldyBhZGRTdWJ2aWV3OmFjdGl2aXR5SW5kaWNhdG9yVmlld107XG4gICAgICAgIC8vIFthY3Rpdml0eUluZGljYXRvclZpZXcgc3RhcnRBbmltYXRpbmddO1xuICAgIH1cbn1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIG9uQ3JlYXRpbmdCYWxsR3JpZFB1bHNlSW5kaWNhdG9yKGFyZ3MpIHtcbi8vICAgICBsZXQgaW5kaWNhdG9yVmlldyA9IG5ldyBjb20ud2FuZy5hdmkuQVZMb2FkaW5nSW5kaWNhdG9yVmlldyhhbmRyb2lkQXBwLmNvbnRleHQpO1xuXG4vLyAgICAgaW5kaWNhdG9yVmlldy5zZXRJbmRpY2F0b3IoXCJCYWxsR3JpZFB1bHNlSW5kaWNhdG9yXCIpO1xuLy8gICAgIGluZGljYXRvclZpZXcuc2V0SW5kaWNhdG9yQ29sb3IoYW5kcm9pZC5ncmFwaGljcy5Db2xvci5XSElURSk7XG5cbi8vICAgICBhcmdzLnZpZXcgPSBpbmRpY2F0b3JWaWV3O1xuLy8gfVxuLy8gZXhwb3J0IGZ1bmN0aW9uIG9uQ3JlYXRpbmdCYWxsUHVsc2VJbmRpY2F0b3IoYXJncykge1xuLy8gICAgIGxldCBpbmRpY2F0b3JWaWV3ID0gbmV3IGNvbS53YW5nLmF2aS5BVkxvYWRpbmdJbmRpY2F0b3JWaWV3KGFuZHJvaWRBcHAuY29udGV4dCk7XG5cbi8vICAgICBpbmRpY2F0b3JWaWV3LnNldEluZGljYXRvcihcIkJhbGxQdWxzZUluZGljYXRvclwiKTtcbi8vICAgICBpbmRpY2F0b3JWaWV3LnNldEluZGljYXRvckNvbG9yKGFuZHJvaWQuZ3JhcGhpY3MuQ29sb3IuV0hJVEUpO1xuXG4vLyAgICAgYXJncy52aWV3ID0gaW5kaWNhdG9yVmlldztcbi8vIH1cbi8vIGV4cG9ydCBmdW5jdGlvbiBvbkNyZWF0aW5nQmFsbENsaXBSb3RhdGVQdWxzZUluZGljYXRvcihhcmdzKSB7XG4vLyAgICAgbGV0IGluZGljYXRvclZpZXcgPSBuZXcgY29tLndhbmcuYXZpLkFWTG9hZGluZ0luZGljYXRvclZpZXcoYW5kcm9pZEFwcC5jb250ZXh0KTtcblxuLy8gICAgIGluZGljYXRvclZpZXcuc2V0SW5kaWNhdG9yKFwiQmFsbENsaXBSb3RhdGVQdWxzZUluZGljYXRvclwiKTtcbi8vICAgICBpbmRpY2F0b3JWaWV3LnNldEluZGljYXRvckNvbG9yKGFuZHJvaWQuZ3JhcGhpY3MuQ29sb3IuV0hJVEUpO1xuXG4vLyAgICAgYXJncy52aWV3ID0gaW5kaWNhdG9yVmlldztcbi8vIH1cblxuXG4vLyBSb3cgMlxuLy8gU3F1YXJlU3BpbkluZGljYXRvclxuLy8gQmFsbENsaXBSb3RhdGVNdWx0aXBsZUluZGljYXRvclxuLy8gQmFsbFB1bHNlUmlzZUluZGljYXRvclxuLy8gQmFsbFJvdGF0ZUluZGljYXRvclxuXG4vLyBleHBvcnQgZnVuY3Rpb24gb25DcmVhdGluZ1NxdWFyZVNwaW5JbmRpY2F0b3IoYXJncykge1xuLy8gICAgIGxldCBpbmRpY2F0b3JWaWV3ID0gbmV3IGNvbS53YW5nLmF2aS5BVkxvYWRpbmdJbmRpY2F0b3JWaWV3KGFuZHJvaWRBcHAuY29udGV4dCk7XG5cbi8vICAgICBpbmRpY2F0b3JWaWV3LnNldEluZGljYXRvcihcIlNxdWFyZVNwaW5JbmRpY2F0b3JcIik7XG4vLyAgICAgaW5kaWNhdG9yVmlldy5zZXRJbmRpY2F0b3JDb2xvcihhbmRyb2lkLmdyYXBoaWNzLkNvbG9yLldISVRFKTtcblxuLy8gICAgIGFyZ3MudmlldyA9IGluZGljYXRvclZpZXc7XG4vLyB9XG4vLyBleHBvcnQgZnVuY3Rpb24gb25DcmVhdGluZ0JhbGxDbGlwUm90YXRlTXVsdGlwbGVJbmRpY2F0b3IoYXJncykge1xuLy8gICAgIGxldCBpbmRpY2F0b3JWaWV3ID0gbmV3IGNvbS53YW5nLmF2aS5BVkxvYWRpbmdJbmRpY2F0b3JWaWV3KGFuZHJvaWRBcHAuY29udGV4dCk7XG5cbi8vICAgICBpbmRpY2F0b3JWaWV3LnNldEluZGljYXRvcihcIkJhbGxDbGlwUm90YXRlTXVsdGlwbGVJbmRpY2F0b3JcIik7XG4vLyAgICAgaW5kaWNhdG9yVmlldy5zZXRJbmRpY2F0b3JDb2xvcihhbmRyb2lkLmdyYXBoaWNzLkNvbG9yLldISVRFKTtcblxuLy8gICAgIGFyZ3MudmlldyA9IGluZGljYXRvclZpZXc7XG4vLyB9XG4vLyBleHBvcnQgZnVuY3Rpb24gb25DcmVhdGluZ0JhbGxQdWxzZVJpc2VJbmRpY2F0b3IoYXJncykge1xuLy8gICAgIGxldCBpbmRpY2F0b3JWaWV3ID0gbmV3IGNvbS53YW5nLmF2aS5BVkxvYWRpbmdJbmRpY2F0b3JWaWV3KGFuZHJvaWRBcHAuY29udGV4dCk7XG5cbi8vICAgICBpbmRpY2F0b3JWaWV3LnNldEluZGljYXRvcihcIkJhbGxQdWxzZVJpc2VJbmRpY2F0b3JcIik7XG4vLyAgICAgaW5kaWNhdG9yVmlldy5zZXRJbmRpY2F0b3JDb2xvcihhbmRyb2lkLmdyYXBoaWNzLkNvbG9yLldISVRFKTtcblxuLy8gICAgIGFyZ3MudmlldyA9IGluZGljYXRvclZpZXc7XG4vLyB9XG4vLyBleHBvcnQgZnVuY3Rpb24gb25DcmVhdGluZ0JhbGxSb3RhdGVJbmRpY2F0b3IoYXJncykge1xuLy8gICAgIGxldCBpbmRpY2F0b3JWaWV3ID0gbmV3IGNvbS53YW5nLmF2aS5BVkxvYWRpbmdJbmRpY2F0b3JWaWV3KGFuZHJvaWRBcHAuY29udGV4dCk7XG5cbi8vICAgICBpbmRpY2F0b3JWaWV3LnNldEluZGljYXRvcihcIkJhbGxSb3RhdGVJbmRpY2F0b3JcIik7XG4vLyAgICAgaW5kaWNhdG9yVmlldy5zZXRJbmRpY2F0b3JDb2xvcihhbmRyb2lkLmdyYXBoaWNzLkNvbG9yLldISVRFKTtcblxuLy8gICAgIGFyZ3MudmlldyA9IGluZGljYXRvclZpZXc7XG4vLyB9XG5cbi8vIFJvdyAzXG4vLyBDdWJlVHJhbnNpdGlvbkluZGljYXRvclxuLy8gQmFsbFppZ1phZ0luZGljYXRvclxuLy8gQmFsbFppZ1phZ0RlZmxlY3RJbmRpY2F0b3Jcbi8vIEJhbGxUcmlhbmdsZVBhdGhJbmRpY2F0b3JcblxuLy8gZXhwb3J0IGZ1bmN0aW9uIG9uQ3JlYXRpbmdDdWJlVHJhbnNpdGlvbkluZGljYXRvcihhcmdzKSB7XG4vLyAgICAgbGV0IGluZGljYXRvclZpZXcgPSBuZXcgY29tLndhbmcuYXZpLkFWTG9hZGluZ0luZGljYXRvclZpZXcoYW5kcm9pZEFwcC5jb250ZXh0KTtcblxuLy8gICAgIGluZGljYXRvclZpZXcuc2V0SW5kaWNhdG9yKFwiQ3ViZVRyYW5zaXRpb25JbmRpY2F0b3JcIik7XG4vLyAgICAgaW5kaWNhdG9yVmlldy5zZXRJbmRpY2F0b3JDb2xvcihhbmRyb2lkLmdyYXBoaWNzLkNvbG9yLldISVRFKTtcblxuLy8gICAgIGFyZ3MudmlldyA9IGluZGljYXRvclZpZXc7XG4vLyB9XG4vLyBleHBvcnQgZnVuY3Rpb24gb25DcmVhdGluZ0JhbGxaaWdaYWdJbmRpY2F0b3IoYXJncykge1xuLy8gICAgIGxldCBpbmRpY2F0b3JWaWV3ID0gbmV3IGNvbS53YW5nLmF2aS5BVkxvYWRpbmdJbmRpY2F0b3JWaWV3KGFuZHJvaWRBcHAuY29udGV4dCk7XG5cbi8vICAgICBpbmRpY2F0b3JWaWV3LnNldEluZGljYXRvcihcIkJhbGxaaWdaYWdJbmRpY2F0b3JcIik7XG4vLyAgICAgaW5kaWNhdG9yVmlldy5zZXRJbmRpY2F0b3JDb2xvcihhbmRyb2lkLmdyYXBoaWNzLkNvbG9yLldISVRFKTtcblxuLy8gICAgIGFyZ3MudmlldyA9IGluZGljYXRvclZpZXc7XG4vLyB9XG4vLyBleHBvcnQgZnVuY3Rpb24gb25DcmVhdGluZ0JhbGxaaWdaYWdEZWZsZWN0SW5kaWNhdG9yKGFyZ3MpIHtcbi8vICAgICBsZXQgaW5kaWNhdG9yVmlldyA9IG5ldyBjb20ud2FuZy5hdmkuQVZMb2FkaW5nSW5kaWNhdG9yVmlldyhhbmRyb2lkQXBwLmNvbnRleHQpO1xuXG4vLyAgICAgaW5kaWNhdG9yVmlldy5zZXRJbmRpY2F0b3IoXCJCYWxsWmlnWmFnRGVmbGVjdEluZGljYXRvclwiKTtcbi8vICAgICBpbmRpY2F0b3JWaWV3LnNldEluZGljYXRvckNvbG9yKGFuZHJvaWQuZ3JhcGhpY3MuQ29sb3IuV0hJVEUpO1xuXG4vLyAgICAgYXJncy52aWV3ID0gaW5kaWNhdG9yVmlldztcbi8vIH1cbi8vIGV4cG9ydCBmdW5jdGlvbiBvbkNyZWF0aW5nQmFsbFRyaWFuZ2xlUGF0aEluZGljYXRvcihhcmdzKSB7XG4vLyAgICAgbGV0IGluZGljYXRvclZpZXcgPSBuZXcgY29tLndhbmcuYXZpLkFWTG9hZGluZ0luZGljYXRvclZpZXcoYW5kcm9pZEFwcC5jb250ZXh0KTtcblxuLy8gICAgIGluZGljYXRvclZpZXcuc2V0SW5kaWNhdG9yKFwiQmFsbFRyaWFuZ2xlUGF0aEluZGljYXRvclwiKTtcbi8vICAgICBpbmRpY2F0b3JWaWV3LnNldEluZGljYXRvckNvbG9yKGFuZHJvaWQuZ3JhcGhpY3MuQ29sb3IuV0hJVEUpO1xuXG4vLyAgICAgYXJncy52aWV3ID0gaW5kaWNhdG9yVmlldztcbi8vIH1cblxuLy8gUm93IDRcbi8vIEJhbGxTY2FsZUluZGljYXRvclxuLy8gTGluZVNjYWxlSW5kaWNhdG9yXG4vLyBMaW5lU2NhbGVQYXJ0eUluZGljYXRvclxuLy8gQmFsbFNjYWxlTXVsdGlwbGVJbmRpY2F0b3JcblxuLy8gZXhwb3J0IGZ1bmN0aW9uIG9uQ3JlYXRpbmdCYWxsU2NhbGVJbmRpY2F0b3IoYXJncykge1xuLy8gICAgIGxldCBpbmRpY2F0b3JWaWV3ID0gbmV3IGNvbS53YW5nLmF2aS5BVkxvYWRpbmdJbmRpY2F0b3JWaWV3KGFuZHJvaWRBcHAuY29udGV4dCk7XG5cbi8vICAgICBpbmRpY2F0b3JWaWV3LnNldEluZGljYXRvcihcIkJhbGxTY2FsZUluZGljYXRvclwiKTtcbi8vICAgICBpbmRpY2F0b3JWaWV3LnNldEluZGljYXRvckNvbG9yKGFuZHJvaWQuZ3JhcGhpY3MuQ29sb3IuV0hJVEUpO1xuXG4vLyAgICAgYXJncy52aWV3ID0gaW5kaWNhdG9yVmlldztcbi8vIH1cbi8vIGV4cG9ydCBmdW5jdGlvbiBvbkNyZWF0aW5nTGluZVNjYWxlSW5kaWNhdG9yKGFyZ3MpIHtcbi8vICAgICBsZXQgaW5kaWNhdG9yVmlldyA9IG5ldyBjb20ud2FuZy5hdmkuQVZMb2FkaW5nSW5kaWNhdG9yVmlldyhhbmRyb2lkQXBwLmNvbnRleHQpO1xuXG4vLyAgICAgaW5kaWNhdG9yVmlldy5zZXRJbmRpY2F0b3IoXCJMaW5lU2NhbGVJbmRpY2F0b3JcIik7XG4vLyAgICAgaW5kaWNhdG9yVmlldy5zZXRJbmRpY2F0b3JDb2xvcihhbmRyb2lkLmdyYXBoaWNzLkNvbG9yLldISVRFKTtcblxuLy8gICAgIGFyZ3MudmlldyA9IGluZGljYXRvclZpZXc7XG4vLyB9XG4vLyBleHBvcnQgZnVuY3Rpb24gb25DcmVhdGluZ0xpbmVTY2FsZVBhcnR5SW5kaWNhdG9yKGFyZ3MpIHtcbi8vICAgICBsZXQgaW5kaWNhdG9yVmlldyA9IG5ldyBjb20ud2FuZy5hdmkuQVZMb2FkaW5nSW5kaWNhdG9yVmlldyhhbmRyb2lkQXBwLmNvbnRleHQpO1xuXG4vLyAgICAgaW5kaWNhdG9yVmlldy5zZXRJbmRpY2F0b3IoXCJMaW5lU2NhbGVQYXJ0eUluZGljYXRvclwiKTtcbi8vICAgICBpbmRpY2F0b3JWaWV3LnNldEluZGljYXRvckNvbG9yKGFuZHJvaWQuZ3JhcGhpY3MuQ29sb3IuV0hJVEUpO1xuXG4vLyAgICAgYXJncy52aWV3ID0gaW5kaWNhdG9yVmlldztcbi8vIH1cbi8vIGV4cG9ydCBmdW5jdGlvbiBvbkNyZWF0aW5nQmFsbFNjYWxlTXVsdGlwbGVJbmRpY2F0b3IoYXJncykge1xuLy8gICAgIGxldCBpbmRpY2F0b3JWaWV3ID0gbmV3IGNvbS53YW5nLmF2aS5BVkxvYWRpbmdJbmRpY2F0b3JWaWV3KGFuZHJvaWRBcHAuY29udGV4dCk7XG5cbi8vICAgICBpbmRpY2F0b3JWaWV3LnNldEluZGljYXRvcihcIkJhbGxTY2FsZU11bHRpcGxlSW5kaWNhdG9yXCIpO1xuLy8gICAgIGluZGljYXRvclZpZXcuc2V0SW5kaWNhdG9yQ29sb3IoYW5kcm9pZC5ncmFwaGljcy5Db2xvci5XSElURSk7XG5cbi8vICAgICBhcmdzLnZpZXcgPSBpbmRpY2F0b3JWaWV3O1xuLy8gfVxuXG4vLyBSb3cgNVxuLy8gQmFsbFB1bHNlU3luY0luZGljYXRvclxuLy8gQmFsbEJlYXRJbmRpY2F0b3Jcbi8vIExpbmVTY2FsZVB1bHNlT3V0SW5kaWNhdG9yXG4vLyBMaW5lU2NhbGVQdWxzZU91dFJhcGlkSW5kaWNhdG9yXG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBvbkNyZWF0aW5nQmFsbFB1bHNlU3luY0luZGljYXRvcihhcmdzKSB7XG4vLyAgICAgbGV0IGluZGljYXRvclZpZXcgPSBuZXcgY29tLndhbmcuYXZpLkFWTG9hZGluZ0luZGljYXRvclZpZXcoYW5kcm9pZEFwcC5jb250ZXh0KTtcblxuLy8gICAgIGluZGljYXRvclZpZXcuc2V0SW5kaWNhdG9yKFwiQmFsbFB1bHNlU3luY0luZGljYXRvclwiKTtcbi8vICAgICBpbmRpY2F0b3JWaWV3LnNldEluZGljYXRvckNvbG9yKGFuZHJvaWQuZ3JhcGhpY3MuQ29sb3IuV0hJVEUpO1xuXG4vLyAgICAgYXJncy52aWV3ID0gaW5kaWNhdG9yVmlldztcbi8vIH1cbi8vIGV4cG9ydCBmdW5jdGlvbiBvbkNyZWF0aW5nQmFsbEJlYXRJbmRpY2F0b3IoYXJncykge1xuLy8gICAgIGxldCBpbmRpY2F0b3JWaWV3ID0gbmV3IGNvbS53YW5nLmF2aS5BVkxvYWRpbmdJbmRpY2F0b3JWaWV3KGFuZHJvaWRBcHAuY29udGV4dCk7XG5cbi8vICAgICBpbmRpY2F0b3JWaWV3LnNldEluZGljYXRvcihcIkJhbGxCZWF0SW5kaWNhdG9yXCIpO1xuLy8gICAgIGluZGljYXRvclZpZXcuc2V0SW5kaWNhdG9yQ29sb3IoYW5kcm9pZC5ncmFwaGljcy5Db2xvci5XSElURSk7XG5cbi8vICAgICBhcmdzLnZpZXcgPSBpbmRpY2F0b3JWaWV3O1xuLy8gfVxuLy8gZXhwb3J0IGZ1bmN0aW9uIG9uQ3JlYXRpbmdMaW5lU2NhbGVQdWxzZU91dEluZGljYXRvcihhcmdzKSB7XG4vLyAgICAgbGV0IGluZGljYXRvclZpZXcgPSBuZXcgY29tLndhbmcuYXZpLkFWTG9hZGluZ0luZGljYXRvclZpZXcoYW5kcm9pZEFwcC5jb250ZXh0KTtcblxuLy8gICAgIGluZGljYXRvclZpZXcuc2V0SW5kaWNhdG9yKFwiTGluZVNjYWxlUHVsc2VPdXRJbmRpY2F0b3JcIik7XG4vLyAgICAgaW5kaWNhdG9yVmlldy5zZXRJbmRpY2F0b3JDb2xvcihhbmRyb2lkLmdyYXBoaWNzLkNvbG9yLldISVRFKTtcblxuLy8gICAgIGFyZ3MudmlldyA9IGluZGljYXRvclZpZXc7XG4vLyB9XG4vLyBleHBvcnQgZnVuY3Rpb24gb25DcmVhdGluZ0xpbmVTY2FsZVB1bHNlT3V0UmFwaWRJbmRpY2F0b3IoYXJncykge1xuLy8gICAgIGxldCBpbmRpY2F0b3JWaWV3ID0gbmV3IGNvbS53YW5nLmF2aS5BVkxvYWRpbmdJbmRpY2F0b3JWaWV3KGFuZHJvaWRBcHAuY29udGV4dCk7XG5cbi8vICAgICBpbmRpY2F0b3JWaWV3LnNldEluZGljYXRvcihcIkxpbmVTY2FsZVB1bHNlT3V0UmFwaWRJbmRpY2F0b3JcIik7XG4vLyAgICAgaW5kaWNhdG9yVmlldy5zZXRJbmRpY2F0b3JDb2xvcihhbmRyb2lkLmdyYXBoaWNzLkNvbG9yLldISVRFKTtcblxuLy8gICAgIGFyZ3MudmlldyA9IGluZGljYXRvclZpZXc7XG4vLyB9XG5cbi8vIFJvdyA2XG4vLyBCYWxsU2NhbGVSaXBwbGVJbmRpY2F0b3Jcbi8vIEJhbGxTY2FsZVJpcHBsZU11bHRpcGxlSW5kaWNhdG9yXG4vLyBCYWxsU3BpbkZhZGVMb2FkZXJJbmRpY2F0b3Jcbi8vIExpbmVTcGluRmFkZUxvYWRlckluZGljYXRvclxuXG4vLyBleHBvcnQgZnVuY3Rpb24gb25DcmVhdGluZ0JhbGxTY2FsZVJpcHBsZUluZGljYXRvcihhcmdzKSB7XG4vLyAgICAgbGV0IGluZGljYXRvclZpZXcgPSBuZXcgY29tLndhbmcuYXZpLkFWTG9hZGluZ0luZGljYXRvclZpZXcoYW5kcm9pZEFwcC5jb250ZXh0KTtcblxuLy8gICAgIGluZGljYXRvclZpZXcuc2V0SW5kaWNhdG9yKFwiQmFsbFNjYWxlUmlwcGxlSW5kaWNhdG9yXCIpO1xuLy8gICAgIGluZGljYXRvclZpZXcuc2V0SW5kaWNhdG9yQ29sb3IoYW5kcm9pZC5ncmFwaGljcy5Db2xvci5XSElURSk7XG5cbi8vICAgICBhcmdzLnZpZXcgPSBpbmRpY2F0b3JWaWV3O1xuLy8gfVxuLy8gZXhwb3J0IGZ1bmN0aW9uIG9uQ3JlYXRpbmdCYWxsU2NhbGVSaXBwbGVNdWx0aXBsZUluZGljYXRvcihhcmdzKSB7XG4vLyAgICAgbGV0IGluZGljYXRvclZpZXcgPSBuZXcgY29tLndhbmcuYXZpLkFWTG9hZGluZ0luZGljYXRvclZpZXcoYW5kcm9pZEFwcC5jb250ZXh0KTtcblxuLy8gICAgIGluZGljYXRvclZpZXcuc2V0SW5kaWNhdG9yKFwiQmFsbFNjYWxlUmlwcGxlTXVsdGlwbGVJbmRpY2F0b3JcIik7XG4vLyAgICAgaW5kaWNhdG9yVmlldy5zZXRJbmRpY2F0b3JDb2xvcihhbmRyb2lkLmdyYXBoaWNzLkNvbG9yLldISVRFKTtcblxuLy8gICAgIGFyZ3MudmlldyA9IGluZGljYXRvclZpZXc7XG4vLyB9XG4vLyBleHBvcnQgZnVuY3Rpb24gb25DcmVhdGluZ0JhbGxTcGluRmFkZUxvYWRlckluZGljYXRvcihhcmdzKSB7XG4vLyAgICAgbGV0IGluZGljYXRvclZpZXcgPSBuZXcgY29tLndhbmcuYXZpLkFWTG9hZGluZ0luZGljYXRvclZpZXcoYW5kcm9pZEFwcC5jb250ZXh0KTtcblxuLy8gICAgIGluZGljYXRvclZpZXcuc2V0SW5kaWNhdG9yKFwiQmFsbFNwaW5GYWRlTG9hZGVySW5kaWNhdG9yXCIpO1xuLy8gICAgIGluZGljYXRvclZpZXcuc2V0SW5kaWNhdG9yQ29sb3IoYW5kcm9pZC5ncmFwaGljcy5Db2xvci5XSElURSk7XG5cbi8vICAgICBhcmdzLnZpZXcgPSBpbmRpY2F0b3JWaWV3O1xuLy8gfVxuLy8gZXhwb3J0IGZ1bmN0aW9uIG9uQ3JlYXRpbmdMaW5lU3BpbkZhZGVMb2FkZXJJbmRpY2F0b3IoYXJncykge1xuLy8gICAgIGxldCBpbmRpY2F0b3JWaWV3ID0gbmV3IGNvbS53YW5nLmF2aS5BVkxvYWRpbmdJbmRpY2F0b3JWaWV3KGFuZHJvaWRBcHAuY29udGV4dCk7XG5cbi8vICAgICBpbmRpY2F0b3JWaWV3LnNldEluZGljYXRvcihcIkxpbmVTcGluRmFkZUxvYWRlckluZGljYXRvclwiKTtcbi8vICAgICBpbmRpY2F0b3JWaWV3LnNldEluZGljYXRvckNvbG9yKGFuZHJvaWQuZ3JhcGhpY3MuQ29sb3IuV0hJVEUpO1xuXG4vLyAgICAgYXJncy52aWV3ID0gaW5kaWNhdG9yVmlldztcbi8vIH1cblxuLy8gUm93IDdcbi8vIFRyaWFuZ2xlU2tld1NwaW5JbmRpY2F0b3Jcbi8vIFBhY21hbkluZGljYXRvclxuLy8gQmFsbEdyaWRCZWF0SW5kaWNhdG9yXG4vLyBTZW1pQ2lyY2xlU3BpbkluZGljYXRvclxuXG4vLyBleHBvcnQgZnVuY3Rpb24gb25DcmVhdGluZ1RyaWFuZ2xlU2tld1NwaW5JbmRpY2F0b3IoYXJncykge1xuLy8gICAgIGxldCBpbmRpY2F0b3JWaWV3ID0gbmV3IGNvbS53YW5nLmF2aS5BVkxvYWRpbmdJbmRpY2F0b3JWaWV3KGFuZHJvaWRBcHAuY29udGV4dCk7XG5cbi8vICAgICBpbmRpY2F0b3JWaWV3LnNldEluZGljYXRvcihcIlRyaWFuZ2xlU2tld1NwaW5JbmRpY2F0b3JcIik7XG4vLyAgICAgaW5kaWNhdG9yVmlldy5zZXRJbmRpY2F0b3JDb2xvcihhbmRyb2lkLmdyYXBoaWNzLkNvbG9yLldISVRFKTtcblxuLy8gICAgIGFyZ3MudmlldyA9IGluZGljYXRvclZpZXc7XG4vLyB9XG4vLyBleHBvcnQgZnVuY3Rpb24gb25DcmVhdGluZ1BhY21hbkluZGljYXRvcihhcmdzKSB7XG4vLyAgICAgbGV0IGluZGljYXRvclZpZXcgPSBuZXcgY29tLndhbmcuYXZpLkFWTG9hZGluZ0luZGljYXRvclZpZXcoYW5kcm9pZEFwcC5jb250ZXh0KTtcblxuLy8gICAgIGluZGljYXRvclZpZXcuc2V0SW5kaWNhdG9yKFwiUGFjbWFuSW5kaWNhdG9yXCIpO1xuLy8gICAgIGluZGljYXRvclZpZXcuc2V0SW5kaWNhdG9yQ29sb3IoYW5kcm9pZC5ncmFwaGljcy5Db2xvci5XSElURSk7XG5cbi8vICAgICBhcmdzLnZpZXcgPSBpbmRpY2F0b3JWaWV3O1xuLy8gfVxuLy8gZXhwb3J0IGZ1bmN0aW9uIG9uQ3JlYXRpbmdCYWxsR3JpZEJlYXRJbmRpY2F0b3IoYXJncykge1xuLy8gICAgIGxldCBpbmRpY2F0b3JWaWV3ID0gbmV3IGNvbS53YW5nLmF2aS5BVkxvYWRpbmdJbmRpY2F0b3JWaWV3KGFuZHJvaWRBcHAuY29udGV4dCk7XG5cbi8vICAgICBpbmRpY2F0b3JWaWV3LnNldEluZGljYXRvcihcIkJhbGxHcmlkQmVhdEluZGljYXRvclwiKTtcbi8vICAgICBpbmRpY2F0b3JWaWV3LnNldEluZGljYXRvckNvbG9yKGFuZHJvaWQuZ3JhcGhpY3MuQ29sb3IuV0hJVEUpO1xuXG4vLyAgICAgYXJncy52aWV3ID0gaW5kaWNhdG9yVmlldztcbi8vIH1cbi8vIGV4cG9ydCBmdW5jdGlvbiBvbkNyZWF0aW5nU2VtaUNpcmNsZVNwaW5JbmRpY2F0b3IoYXJncykge1xuLy8gICAgIGxldCBpbmRpY2F0b3JWaWV3ID0gbmV3IGNvbS53YW5nLmF2aS5BVkxvYWRpbmdJbmRpY2F0b3JWaWV3KGFuZHJvaWRBcHAuY29udGV4dCk7XG5cbi8vICAgICBpbmRpY2F0b3JWaWV3LnNldEluZGljYXRvcihcIlNlbWlDaXJjbGVTcGluSW5kaWNhdG9yXCIpO1xuLy8gICAgIGluZGljYXRvclZpZXcuc2V0SW5kaWNhdG9yQ29sb3IoYW5kcm9pZC5ncmFwaGljcy5Db2xvci5XSElURSk7XG5cbi8vICAgICBhcmdzLnZpZXcgPSBpbmRpY2F0b3JWaWV3O1xuLy8gfVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gb25TaG93KCkge1xuLy8gICAgIGluZGljYXRvclZpZXcuc2hvdygpO1xuLy8gfVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gb25IaWRlKCkge1xuLy8gICAgIGluZGljYXRvclZpZXcuaGlkZSgpO1xuLy8gfVxuIl19