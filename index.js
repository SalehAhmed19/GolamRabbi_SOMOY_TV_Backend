const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const PORT = process.env.PORT || 4000;
// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.dbUser}:${process.env.dbPassword}@golamrabby.dpb03w7.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    // Fun with fan form data collection
    const FunWithFanRegCollection = client
      .db("golamrabby")
      .collection("FunWithFanRegistration");

    // Course enrollment student information form form data collection
    const CourseEnrolmentCollection = client
      .db("golamrabby")
      .collection("CourseEnrolmentInfo");

    // Sharing feelings and problems form form data collection
    const SharingFeelingProblemCollection = client
      .db("golamrabby")
      .collection("SharingFeelingAndProblems");

    // mentorship registration form data collection
    const MentorshipRegCollection = client
      .db("golamrabby")
      .collection("MentorshipRegistration");

    // mock test schedule form data collection
    const MockTestScheduleCollection = client
      .db("golamrabby")
      .collection("MockTestScheduleInfo");

    // newsletter subscription form data collection
    const NewsLetterSubCollection = client
      .db("golamrabby")
      .collection("NewsLetterSubscription");

    // events bookings form data collection
    const EventBookingCollection = client
      .db("golamrabby")
      .collection("EventBookingInfo");

    await client.connect();
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Server is running");
});
app.listen(PORT, () => {
  console.log("Listening to port ", PORT);
});
