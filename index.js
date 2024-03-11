const  express =require('express');
const routes = require('./routes/Routes.js');
const  Connection  = require('./Database.js');
const cors = require('cors');

const app = express();

const Port = 5000;

app.use(
  cors({
    origin: ["https://expense-tracker-tan-three.vercel.app"],
    methods: ["POST", "GET","Delete"],
    credentials: true
  })
);
app.use(express.json())

app.use('/api',routes);

Connection();

app.listen(Port,()=>{
    console.log(`Server is Running on port http://localhost:${Port}`);
});