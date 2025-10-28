export const projects = [
    {
        id: 1,
        groupName: "Group One",
        students: [
            "Abdurehman Nuru",
            "Mintesnot Hailu Degu",
            "Eyuel Anteneh Eshetu",
            "Dereje Jubruka Ume",
            "Tamrat Birhanu Adnew",
            "Behailu Mandefro",
            "Ahmed Yousuf Hallane"
        ],
        title: "🛒 Community Farmers’ Market",
        description:
            "Local farmers list products, buyers order items, and orders are tracked.",
        requirements: [
            "Farmers and buyers separate dashboards",
            "Product inventory decreases automatically after purchase",
            "Transaction history per user",
            "CSV export of sales summary"
        ]
    },
    {
        id: 2,
        groupName: "Group Two",
        students: [
            "Mehdi Taib Siraj",
            "Asli Mohame Yuya",
            "Ana Seraj Yuya",
            "Mohammed Jemal Mohamed",
            "Abdi Shakur Mohamed Liban",
            "Abdi Rashid Ali Isak",
            "Dagan Mahad Adan"
        ],
        title: "🏥 Clinic Queue & Appointment System",
        description:
            "Patients book appointments and track their queue number in real-time.",
        requirements: [
            "Different doctors have independent queues",
            "Now Serving display updates automatically (AJAX or JS)",
            "Patients can cancel or reschedule before approval",
            "Doctor login to update patient status"
        ]
    },
    {
        id: 3,
        groupName: "Group Three",
        students: [
            "Sharmarke Abdi Ahmed",
            "Liban Abdikadir Issack",
            "Mahamed Rashid Abdi",
            "Abdulaziz Abdulmalik Umar",
            "Kalid Dayib Muhumed",
            "Habbi Abdi Siyad",
            "Samiya Jemal"
        ],
        title: "🎟️ Event Ticketing and Check-In System",
        description:
            "Users can register for events and get QR/barcode tickets checked by organizers.",
        requirements: [
            "Auto-generated QR code on ticket purchase (PHP library)",
            "Organizer login to scan and validate",
            "Ticket status changes after check-in",
            "Email ticket confirmation"
        ]
    },
    {
        id: 4,
        groupName: "Group Four",
        students: [
            "Eyosiyas Abdulahi",
            "Kalid Mustefa",
            "Rahel Fikru",
            "Rediet Getnet",
            "Sosena Yemataw",
            "Ekid Tesfaye",
            "Zeyneba Abdurehman"
        ],
        title: "🧍 Volunteer Management System",
        description:
            "NGOs manage volunteers, assign tasks, and track hours.",
        requirements: [
            "Volunteer profiles with skill tags",
            "Task assignment module with deadlines",
            "Auto-summary of hours worked",
            "Ranking system for most active volunteers"
        ]
    },
    {
        id: 5,
        groupName: "Group Five",
        students: [
            "Abdirahman Sharif",
            "Ahmednour Mohamed",
            "Khalid Abdifatah",
            "Mohamed Abdi Yusuf",
            "Suleyman Mahamed",
            "Kedija",
            "Titugn"
        ],
        title: "🏠 Campus Lost & Found Platform",
        description:
            "Students post lost/found items; others can claim or return them.",
        requirements: [
            "Item verification step by admin",
            "Photo upload for each item",
            "Chat or comment system for claims",
            "Found Match alert if item keywords match"
        ]
    },
    {
        id: 6,
        groupName: "Group Six",
        students: [
            "Mussie Teklay",
            "Mikiyas Ayalew",
            "Alelign Smachew",
            "Tajudin Abdi",
            "Enku Abera",
            "Tsion Mgose"
        ],
        title: "🍽️ Cafeteria Order & Feedback System",
        description:
            "Students order meals online; kitchen staff manage orders.",
        requirements: [
            "Meal availability updates daily",
            "Order queue dashboard for kitchen staff",
            "Feedback form linked to each completed order",
            "Order summary per day for manager"
        ]
    },
    {
        id: 7,
        groupName: "Group Seven",
        students: [
            "Mohamed Abdikarim",
            "Najib Hassen",
            "Bishar Ali",
            "Abdulaziz Abdulmalik Umar",
            "Khadar Salal",
            "Suhur Abdikadir"
        ],
        title: "🧾 Department Equipment Borrowing Tracker",
        description:
            "Tracks borrowing and returning of lab equipment.",
        requirements: [
            "Multi-department system (with department-based admin)",
            "Automatic overdue email reminders",
            "Maintenance record for each item",
            "Borrower cannot request new item until previous returned"
        ]
    },
    {
        id: 8,
        groupName: "Group Eight",
        students: [
            "Guled Mohamud",
            "Mubashir Ahmed",
            "Abdirahman Ahmed",
            "Abdirahman Mohamed",
            "Abdi Izi Ahmed",
            "Hanan Abdirashid",
            "Zehara"
        ],
        title: "🧑‍🏫 Online Course Review & Rating System",
        description:
            "Students review courses and rate instructors anonymously.",
        requirements: [
            "Anonymous review system (student identity hidden)",
            "Prevent duplicate review for the same course",
            "Rating average displayed using stars (JS)",
            "Instructor dashboard with feedback summary"
        ]
    },
    {
        id: 9,
        groupName: "Group Nine",
        students: [
            "Jimcale Kalif Mohamed",
            "Fathi Dayr Mohamud",
            "Hamda Alishek Muhumed",
            "Yom",
            "Nasrudin Amin Abdi",
            "Ubah Abdirashid Ali",
            "Filsan Mohamed Huzen"
        ],
        title: "🧾 Utility Bill Splitter for Roommates",
        description:
            "Shared house system that splits bills and tracks who owes what.",
        requirements: [
            "Add bills (water, electricity, etc.) and assign shares per roommate",
            "Each user dashboard shows pending payments",
            "Automatic notification when all bills paid",
            "Simple calculator for fair splitting (JS logic)"
        ]
    },
    {
        id: 10,
        groupName: "Group Ten",
        students: [
            "Kader Mohammed Ibrahim",
            "Mustafa Abdi Daahir",
            "Saed Abshi Jama",
            "Abdi Rahman Yusuf Mousa",
            "Faiso Mohamed Mahamud",
            "Nura Abdi Ibrahim",
            "Abdi Hakin Ismail Muhumed"
        ],
        title: "💰 Student Savings & Loan Cooperative",
        description:
            "Campus-based cooperative system where members save and borrow money.",
        requirements: [
            "Transaction log with running balance",
            "Loan request with approval flow",
            "Interest calculator (JS)",
            "Monthly statement generation"
        ]
    }
];
