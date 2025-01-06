import { Calendar } from "antd";
import type { Moment } from "moment";
import momentGenerateConfig from "rc-picker/es/generate/moment";
import moment from "moment";

moment.updateLocale("en-gb", {
  weekdaysMin: ["Chủ nhật", "Thứ hai", "Thứ ba", "Wed", "Thu", "Sat", "Fri"], // Thứ tự tùy chỉnh
});

const MyCalendar = Calendar.generateCalendar<Moment>(momentGenerateConfig);

export default MyCalendar;
