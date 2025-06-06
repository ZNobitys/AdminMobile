const express = require('express');
const path = require('path');
const engine = require('ejs-mate');

const app = express();

// Cấu hình ejs-mate làm template engine
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Thư mục chứa file tĩnh như CSS, JS, hình ảnh
app.use(express.static(path.join(__dirname, 'public')));

// Import router
const adminRouter = require('./router/admin');    // router quản lý admin
const loginRouter = require('./router/admin');    // router login riêng biệt  
const topicRouter = require('./router/admin');    // router quản lý chủ đề
const userRouter = require('./router/admin');      // router quản lý người dùng
const skillRouter = require('./router/admin');     // router quản lý kỹ năng
const examRouter = require('./router/admin');     // router quản lý thi
const detailQuestionRouter = require('./router/admin'); // router quản lý chi tiết câu hỏi
const addQuestionRouter = require('./router/admin'); // router quản lý thêm câu hỏi
const detailPracticeRouter = require('./router/admin'); // router quản lý chi tiết bài tập
const addPracticeRouter = require('./router/admin'); // router quản lý thêm bài tập
const detailTopicRouter = require('./router/admin'); // router quản lý chi tiết chủ đề
const detailExamRouter = require('./router/admin'); // router quản lý chi tiết thi

// Sử dụng router
app.use('/', loginRouter);   // Route đăng nhập (ví dụ: /login)
app.use('/topic', topicRouter);      // Route quản lý chủ đề (ví dụ: /topic)
app.use('/user', userRouter);        // Route quản lý người dùng (ví dụ: /user)
app.use('/skill', skillRouter);      // Route quản lý kỹ năng (ví dụ: /skill)
app.use('/exam', examRouter);     // Route quản lý thi (ví dụ: /exam)
app.use('/detail-question', detailQuestionRouter); // Route quản lý chi tiết câu hỏi (ví dụ: /detail)
app.use('/add-question', addQuestionRouter); // Route quản lý thêm câu hỏi (ví dụ: /add-question)
app.use('/detail-practice', detailPracticeRouter); // Route quản lý chi tiết bài tập (ví dụ: /detail-practice)
app.use('/add-practice', addPracticeRouter); // Route quản lý thêm bài tập (ví dụ: /add-practice)
app.use('/details-topic', detailTopicRouter); // Route quản lý chi tiết chủ đề (ví dụ: /detail-topic) 
app.use('/detail-exam', detailExamRouter); // Route quản lý chi tiết thi (ví dụ: /detail-exam) 
// Middleware để xử lý lỗi 404

// Khởi động server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server đang chạy tại http://localhost:${PORT}`);
});
