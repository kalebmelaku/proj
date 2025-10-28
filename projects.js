export const projects = [
    {
        id: 1,
        groupName: "Group One",
        students: ["Student One", "student two", "student 3"],
        title: "🎓 Student Attendance & Performance Tracker",
        description: "Teachers can record daily attendance and test scores; students can view their performance summary.",
        requirements: [
            "Role-based login: Admin (teacher) and Student",
            "Attendance dashboard with monthly charts (JS chart library)",
            "Auto-generated student report cards in PDF",
            "Restrict students to only see their own record"
        ]
    },
    {
        id: 2,
        groupName: "Group Two",
        students: ["Student One", "student two", "student 3"],
        title: "🏫 Campus Facility Booking System",
        description: "Students can book rooms (like labs or halls) for study sessions or clubs.",
        requirements: [
            "Prevent double booking for the same time slot",
            "Approval workflow (admin must approve booking)",
            "Email/notification on approval",
            "Calendar view of bookings"
        ]
    },
    {
        id: 3,
        groupName: "Group Three",
        students: ["Student One", "student two", "student 3"],
        title: "🛒 Community Farmers’ Market",
        description: "Local farmers list products, buyers order items, and orders are tracked.",
        requirements: [
            "Farmers and buyers separate dashboards",
            "Product inventory decreases automatically after purchase",
            "Transaction history per user",
            "CSV export of sales summary"
        ]
    },
    {
        id: 4,
        groupName: "Group Four",
        students: ["Student One", "student two", "student 3"],
        title: "🏥 Clinic Queue & Appointment System",
        description: "Patients book appointments and track their queue number in real-time.",
        requirements: [
            "Different doctors have independent queues",
            "Now Serving display updates automatically (AJAX or JS)",
            "Patients can cancel or reschedule before approval",
            "Doctor login to update patient status"
        ]
    },
    {
        id: 5,
        groupName: "Group Five",
        students: ["Student One", "student two", "student 3"],
        title: "📚 Digital Library with Reading History",
        description: "Students browse and borrow digital books (PDFs or text).",
        requirements: [
            "Admin uploads books with metadata (category, author)",
            "Borrow/return system with due date tracking",
            "Reading history per user",
            "Search and filter by genre"
        ]
    },
    {
        id: 6,
        groupName: "Group Six",
        students: ["Student One", "student two", "student 3"],
        title: "🎟️ Event Ticketing and Check-In System",
        description: "Users can register for events and get QR/barcode tickets checked by organizers.",
        requirements: [
            "Auto-generated QR code on ticket purchase (PHP library)",
            "Organizer login to scan and validate",
            "Ticket status changes after check-in",
            "Email ticket confirmation"
        ]
    },
    {
        id: 7,
        groupName: "Group Seven",
        students: ["Student One", "student two", "student 3"],
        title: "🧍 Volunteer Management System",
        description: "NGOs manage volunteers, assign tasks, and track hours.",
        requirements: [
            "Volunteer profiles with skill tags",
            "Task assignment module with deadlines",
            "Auto-summary of hours worked",
            "Ranking system for most active volunteers"
        ]
    },
    {
        id: 8,
        groupName: "Group Eight",
        students: ["Student One", "student two", "student 3"],
        title: "🏠 Campus Lost & Found Platform",
        description: "Students post lost/found items; others can claim or return them.",
        requirements: [
            "Item verification step by admin",
            "Photo upload for each item",
            "Chat or comment system for claims",
            "Found Match alert if item keywords match"
        ]
    },
    {
        id: 9,
        groupName: "Group Nine",
        students: ["Student One", "student two", "student 3"],
        title: "🍽️ Cafeteria Order & Feedback System",
        description: "Students order meals online; kitchen staff manage orders.",
        requirements: [
            "Meal availability updates daily",
            "Order queue dashboard for kitchen staff",
            "Feedback form linked to each completed order",
            "Order summary per day for manager"
        ]
    },
    {
        id: 10,
        groupName: "Group Ten",
        students: ["Student One", "student two", "student 3"],
        title: "🧾 Department Equipment Borrowing Tracker",
        description: "Tracks borrowing and returning of lab equipment.",
        requirements: [
            "Multi-department system (with department-based admin)",
            "Automatic overdue email reminders",
            "Maintenance record for each item",
            "Borrower cannot request new item until previous returned"
        ]
    },
    {
        id: 11,
        groupName: "Group Eleven",
        students: ["Student One", "student two", "student 3"],
        title: "📅 Internship Placement & Evaluation Portal",
        description: "Students apply for internships; employers evaluate them online.",
        requirements: [
            "Multi-role system: Student, Employer, Admin",
            "Employer can score students on performance criteria",
            "Student can upload weekly reports (PDF)",
            "Auto-calculated average score per intern"
        ]
    },
    {
        id: 12,
        groupName: "Group Twelve",
        students: ["Student One", "student two", "student 3"],
        title: "💰 Student Savings & Loan Cooperative",
        description: "Campus-based cooperative system where members save and borrow money.",
        requirements: [
            "Transaction log with running balance",
            "Loan request with approval flow",
            "Interest calculator (JS)",
            "Monthly statement generation"
        ]
    },
    {
        id: 13,
        groupName: "Group 13",
        students: ["Student One", "student two", "student 3"],
        title: "🧑‍🏫 Online Course Review & Rating System",
        description: "Students review courses and rate instructors anonymously.",
        requirements: [
            "Anonymous review system (student identity hidden)",
            "Prevent duplicate review for the same course",
            "Rating average displayed using stars (JS)",
            "Instructor dashboard with feedback summary"
        ]
    },
    {
        id: 14,
        groupName: "Group 14",
        students: ["Student One", "student two", "student 3"],
        title: "🧾 Utility Bill Splitter for Roommates",
        description: "Shared house system that splits bills and tracks who owes what.",
        requirements: [
            "Add bills (water, electricity, etc.) and assign shares per roommate",
            "Each user dashboard shows pending payments",
            "Automatic notification when all bills paid",
            "Simple calculator for fair splitting (JS logic)"
        ]
    },
    {
        id: 15,
        groupName: "Group 15",
        students: ["Student One", "student two", "student 3"],
        title: "🏋️ Campus Fitness Club Management System",
        description: "Gym trainers manage members, attendance, and progress logs.",
        requirements: [
            "Member check-in system (with time tracking)",
            "Workout plan & progress graph",
            "Trainer notes for each member",
            "Auto-alert for expired membership"
        ]
    }
];
