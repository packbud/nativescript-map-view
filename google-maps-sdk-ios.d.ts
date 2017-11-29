declare class GMSServices {
  static provideAPIKey(APIKey: string): boolean;
}

declare class GMSCameraPosition extends NSObject {
  static cameraWithLatitudeLongitudeZoom(latitude: number, longtitude: number, zoom: number): GMSCameraPosition;
}

declare class GMSMapView extends NSObject {
  animateToCameraPosition(cameraPosition: GMSCameraPosition): void;
  animateWithCameraUpdate(cameraUpdate: GMSCameraUpdate): void;
  static mapWithFrameCamera(frame: CGRect, camera: GMSCameraPosition): GMSMapView;
}

declare class GMSCoordinateBounds extends NSObject {
  static alloc(): GMSCoordinateBounds;
  static init(): GMSCoordinateBounds;
  includingCoordinate(coordinate: CLLocationCoordinate2D): GMSCoordinateBounds;
}

declare class GMSCameraUpdate extends NSObject {
  static fitBounds(bounds: GMSCoordinateBounds): GMSCameraUpdate;
}

declare const enum GMSMapViewType {
  kGMSTypeNormal = 1,
  kGMSTypeSatellite,
  kGMSTypeTerrain,
  kGMSTypeHybrid,
  kGMSTypeNone,
}

declare class GMSPath extends NSObject {
  static pathFromEncodedPath(encodedPath: string): GMSPath;
}

declare class GMSPolyline extends NSObject {
  strokeWidth: number;
  strokeColor: UIColor;
  map: GMSMapView;

  static polylineWithPath(path: GMSPath): GMSPolyline;
}

declare class GMSCameraPosition extends NSObject {
  // TODO: How about overloaded methods?
  static cameraWithTarget(target: CLLocationCoordinate2D, zoom: number): GMSCameraPosition;
}

declare class GMSMarker {
  title: string;
  iconView: UIView;
  map: GMSMapView;

  static markerWithPosition(position: CLLocationCoordinate2D): GMSMarker;
}