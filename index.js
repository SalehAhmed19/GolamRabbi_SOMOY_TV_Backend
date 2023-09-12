const { MongoClient, ServerApiVersion, ObjectId, ClientSession } = require("mongodb");
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

    // ******************** making all APIs (POST Method) **************************** //

    // fun with fan modal data post into database api
    app.post("/api/fun-with-fan-reg", async (req, res) => {
      const FWFRegInfo = req.body;
      const result = await FunWithFanRegCollection.insertOne(FWFRegInfo);
      res.send(result);
    });

    // share your feeling and problem modal data post into database api
    app.post("/api/share-your-feeling", async (req, res) => {
      const ShareFP = req.body;
      const result = await SharingFeelingProblemCollection.insertOne(ShareFP);
      res.send(result);
    });

    // fun with fan modal data post into database api
    app.post("/api/course-enrollment", async (req, res) => {
      const CourseEnrollmentInfo = req.body;
      const result = await CourseEnrolmentCollection.insertOne(
        CourseEnrollmentInfo
      );
      res.send(result);
    });

    // mentorship booking modal data post into database api
    app.post("/api/mentorship-booking", async (req, res) => {
      const MentorshipBookingInfo = req.body;
      const result = await MentorshipRegCollection.insertOne(
        MentorshipBookingInfo
      );
      res.send(result);
    });

    // mock test schedule modal data post into database api
    app.post("/api/mock-test-schedule", async (req, res) => {
      const MockTestScheduleInfo = req.body;
      const result = await MockTestScheduleCollection.insertOne(
        MockTestScheduleInfo
      );
      res.send(result);
    });

    // newsletter subscription modal data post into database api
    app.post("/api/newsletter-subscription", async (req, res) => {
      const NewsLetterSubscriptionEmail = req.body;
      const result = await NewsLetterSubCollection.insertOne(
        NewsLetterSubscriptionEmail
      );
      res.send(result);
    });
    console.log("object")

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
