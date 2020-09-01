export var UploadStatus;
(function (UploadStatus) {
    UploadStatus[UploadStatus["Queue"] = 0] = "Queue";
    UploadStatus[UploadStatus["Uploading"] = 1] = "Uploading";
    UploadStatus[UploadStatus["Done"] = 2] = "Done";
    UploadStatus[UploadStatus["Cancelled"] = 3] = "Cancelled";
})(UploadStatus || (UploadStatus = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC11cGxvYWRlci9zcmMvbGliL2ludGVyZmFjZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYUEsTUFBTSxDQUFOLElBQVksWUFLWDtBQUxELFdBQVksWUFBWTtJQUN0QixpREFBSyxDQUFBO0lBQ0wseURBQVMsQ0FBQTtJQUNULCtDQUFJLENBQUE7SUFDSix5REFBUyxDQUFBO0FBQ1gsQ0FBQyxFQUxXLFlBQVksS0FBWixZQUFZLFFBS3ZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFVwbG9hZGVyT3B0aW9ucyB7XHJcbiAgY29uY3VycmVuY3k6IG51bWJlcjtcclxuICBhbGxvd2VkQ29udGVudFR5cGVzPzogc3RyaW5nW107XHJcbiAgbWF4VXBsb2Fkcz86IG51bWJlcjtcclxuICBtYXhGaWxlU2l6ZT86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCbG9iRmlsZSBleHRlbmRzIEJsb2Ige1xyXG4gIG5hbWU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVXBsb2FkU3RhdHVzIHtcclxuICBRdWV1ZSxcclxuICBVcGxvYWRpbmcsXHJcbiAgRG9uZSxcclxuICBDYW5jZWxsZWRcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVcGxvYWRQcm9ncmVzcyB7XHJcbiAgc3RhdHVzOiBVcGxvYWRTdGF0dXM7XHJcbiAgZGF0YT86IHtcclxuICAgIHBlcmNlbnRhZ2U6IG51bWJlcjtcclxuICAgIHNwZWVkOiBudW1iZXI7XHJcbiAgICBzcGVlZEh1bWFuOiBzdHJpbmc7XHJcbiAgICBzdGFydFRpbWU6IG51bWJlciB8IG51bGw7XHJcbiAgICBlbmRUaW1lOiBudW1iZXIgfCBudWxsO1xyXG4gICAgZXRhOiBudW1iZXIgfCBudWxsO1xyXG4gICAgZXRhSHVtYW46IHN0cmluZyB8IG51bGw7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVcGxvYWRGaWxlIHtcclxuICBpZDogc3RyaW5nO1xyXG4gIGZpbGVJbmRleDogbnVtYmVyO1xyXG4gIGxhc3RNb2RpZmllZERhdGU6IERhdGU7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHNpemU6IG51bWJlcjtcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgZm9ybTogRm9ybURhdGE7XHJcbiAgcHJvZ3Jlc3M6IFVwbG9hZFByb2dyZXNzO1xyXG4gIHJlc3BvbnNlPzogYW55O1xyXG4gIHJlc3BvbnNlU3RhdHVzPzogbnVtYmVyO1xyXG4gIHN1Yj86IFN1YnNjcmlwdGlvbiB8IGFueTtcclxuICBuYXRpdmVGaWxlPzogRmlsZTtcclxuICByZXNwb25zZUhlYWRlcnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFVwbG9hZE91dHB1dCB7XHJcbiAgdHlwZTogJ2FkZGVkVG9RdWV1ZScgfCAnYWxsQWRkZWRUb1F1ZXVlJyB8ICd1cGxvYWRpbmcnIHwgJ2RvbmUnIHwgJ3N0YXJ0JyB8ICdjYW5jZWxsZWQnIHwgJ2RyYWdPdmVyJ1xyXG4gICAgICB8ICdkcmFnT3V0JyB8ICdkcm9wJyB8ICdyZW1vdmVkJyB8ICdyZW1vdmVkQWxsJyB8ICdyZWplY3RlZCc7XHJcbiAgZmlsZT86IFVwbG9hZEZpbGU7XHJcbiAgbmF0aXZlRmlsZT86IEZpbGU7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVXBsb2FkSW5wdXQge1xyXG4gIHR5cGU6ICd1cGxvYWRBbGwnIHwgJ3VwbG9hZEZpbGUnIHwgJ2NhbmNlbCcgfCAnY2FuY2VsQWxsJyB8ICdyZW1vdmUnIHwgJ3JlbW92ZUFsbCc7XHJcbiAgdXJsPzogc3RyaW5nO1xyXG4gIG1ldGhvZD86IHN0cmluZztcclxuICBpZD86IHN0cmluZztcclxuICBmaWVsZE5hbWU/OiBzdHJpbmc7XHJcbiAgZmlsZUluZGV4PzogbnVtYmVyO1xyXG4gIGZpbGU/OiBVcGxvYWRGaWxlO1xyXG4gIGRhdGE/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB8IEJsb2IgfTtcclxuICBoZWFkZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuICBpbmNsdWRlV2ViS2l0Rm9ybUJvdW5kYXJ5PzogYm9vbGVhbjsgLy8gSWYgZmFsc2UsIG9ubHkgdGhlIGZpbGUgaXMgc2VuZCB0cm91Z2ggeGhyLnNlbmQgKFdlYktpdEZvcm1Cb3VuZGFyeSBpcyBvbWl0KVxyXG4gIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbn1cclxuIl19