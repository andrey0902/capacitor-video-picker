import Foundation

@objc public class GalleryVideoPickerPlugin: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
