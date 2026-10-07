# Mộc Books — trang giới thiệu sách

Trang web tĩnh giới thiệu ấn phẩm minh họa “Bắt đầu từ điều nhỏ”. Dùng Bootstrap 5.3.3 với nội dung, bìa sách và chân dung SVG được tạo mới.

## Đủ các phần đề bài
1. Header: thương hiệu, menu responsive, hero.
2. Book Overview: giới thiệu, thông tin sách, nút xem trích đoạn.
3. Author: tác giả và chân dung minh họa.
4. Features: ba điểm nổi bật.
5. Prices: ba lựa chọn đọc, giá minh họa.
6. Download: tệp chương đọc thử UTF-8 tải được.
7. Reader’s Say: ba nhận xét minh họa.
8. Footer: liên kết, bản quyền và thông tin minh họa.

## Chạy
Mở index.html bằng trình duyệt, hoặc dùng Live Server trong VS Code. Bootstrap CSS/JS và tất cả hình ảnh được lưu cục bộ, không cần Internet để xem.

Có thể chạy máy chủ cục bộ bằng Node.js hoặc Python nếu muốn thử tải tệp trong môi trường web.

## Tương tác
- Menu hamburger mở/đóng trên màn hình dưới 992px; chọn mục menu sẽ đóng menu.
- Các liên kết điều hướng đến phần tương ứng.
- Nút đọc trích đoạn mở Bootstrap Modal; đóng bằng nút Đóng hoặc Escape.
- Tải bản đọc thử tại downloads/bat-dau-tu-dieu-nho-doc-thu.txt.

Trang không có chức năng đặt hàng/thanh toán. Sách, tác giả, giá và nhận xét là nội dung minh họa cho bài thực hành.

## Cấu trúc
index.html, style.css, script.js; assets/ chứa SVG; vendor/ chứa Bootstrap; downloads/ chứa chương đọc thử. Các ảnh kết quả nằm trong desktop.png, tablet.png và mobile.png.

## Tham khảo
Bố cục các phần tham khảo từ https://github.com/hoanv7169/bootstrap-demo. Mã nguồn được viết mới, sử dụng Bootstrap 5 thay vì Bootstrap 4 của mẫu. Bootstrap có giấy phép MIT, thông tin bản quyền được giữ trong các tệp vendor.

## Kết quả kiểm tra
Đã kiểm tra ở 1440px, 1024px, 992px, 991px, 768px, 767px, 390px và 320px: đủ các phần, hình ảnh hiển thị, liên kết nội bộ hợp lệ, không tràn ngang. Menu mobile, modal đọc thử và tải tệp thực tế đã hoạt động đúng. Kết quả lưu trong verification.txt.
