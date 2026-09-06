import { useEffect, useState } from "react";

// localStorage ném lỗi ở chế độ riêng tư hoặc khi bị chặn cookie,
// nên mọi truy cập đều phải bọc lại kẻo trắng cả trang.
export function readStored(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStored(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* không lưu được thì trang vẫn chạy bình thường */
  }
}

// State tự ghi xuống localStorage dưới dạng chuỗi.
// `getInitial` tự đọc giá trị đã lưu qua readStored và tự quyết định mặc định.
export function usePersistedState(key, getInitial) {
  const [value, setValue] = useState(getInitial);

  useEffect(() => {
    writeStored(key, String(value));
  }, [key, value]);

  return [value, setValue];
}
