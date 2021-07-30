export function CheckValidationFile(file: File) {
  if (!file.size) {
    alert("파일이 없습니다.");
    return;
  }
  if (file.size > 5 * 1024 * 1024) {
    alert("파일이 너무 큽니다.(제한:5MB)");
    return;
  }
  if (!file.type.includes("png") && !file.type.includes("jpeg")) {
    alert("png 또는 jpeg 파일만 업로드 가능합니다.");
    return false;
  }
  return true;
}
