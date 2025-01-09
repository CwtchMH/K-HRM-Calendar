export default function Statistics() {
  return (
    <div className="statistic grid grid-rows-16 border">
      <div className="border border-l-0 text-center place-content-center border-b-0 font-bold">
        Tổng hợp
      </div>
      <div className="row-span-15 grid grid-rows-14">
        <div className="flex flex-row items-center justify-between border border-l-0 px-1">
          <div>Công làm việc</div>
          <div>0</div>
        </div>
        <div className="flex flex-row items-center justify-between border border-t-0 border-l-0 px-1">
          <div>Số công chuẩn</div>
          <div>0</div>
        </div>
        <div className="flex flex-row items-center justify-between border border-t-0 border-l-0 px-1">
          <div>Số lần đi muộn</div>
          <div>0</div>
        </div>
        <div className="flex flex-row items-center justify-between border border-t-0 border-l-0 px-1">
          <div>Số phút đi muộn</div>
          <div>0</div>
        </div>
        <div className="flex flex-row items-center justify-between border border-t-0 border-l-0 px-1">
          <div>Số lần về sớm</div>
          <div>0</div>
        </div>
        <div className="flex flex-row items-center justify-between border border-t-0 border-l-0 px-1">
          <div>Số phút về sớm</div>
          <div>0</div>
        </div>
        <div className="flex flex-row items-center justify-between border border-t-0 border-l-0 px-1">
          <div>Phạt</div>
          <div>0</div>
        </div>
        <div className="flex flex-row items-center justify-between border border-t-0 border-l-0 px-1">
          <div>Thưởng</div>
          <div>0</div>
        </div>
        <div className="flex flex-row items-center justify-between border border-t-0 border-l-0 px-1">
          <div>Số giờ OT tính công</div>
          <div>0</div>
        </div>
        <div className="flex flex-row items-center justify-between border border-t-0 border-l-0 px-1">
          <div>
            <p>Số giờ OT tính công</p>
            <p>(Đã nhân hệ số)</p>
          </div>
          <div>0</div>
        </div>
        <div className="flex flex-row items-center justify-between border border-t-0 border-l-0 px-1">
          <div>Số giờ OT nghỉ bù</div>
          <div>0</div>
        </div>
        <div className="flex flex-row items-center justify-between border border-t-0 border-l-0 px-1">
          <div>Số giờ vắng mặt - nghỉ bù</div>
          <div>0</div>
        </div>
        <div className="flex flex-row items-center justify-between border border-t-0 border-l-0 px-1">
          <div>Số phép còn lại</div>
          <div>0</div>
        </div>
        <div className="flex flex-row items-center justify-between border border-t-0 border-l-0 px-1">
          <div>Số lần sai log work</div>
          <div>0</div>
        </div>
      </div>
    </div>
  );
}
