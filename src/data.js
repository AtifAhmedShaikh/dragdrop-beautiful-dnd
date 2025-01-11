export const initialData = {
  boards: {
    "board-1": {
      id: "board-1",
      title: "To Do",
      cards: [
        { id: "card-1", content: "Design Wireframes" },
        { id: "card-2", content: "Write User Stories" },
        { id: "card-3", content: "Prepare Presentation" },
        { id: "card-4", content: "Create Project Plan" },
        { id: "card-5", content: "Review Requirements" },
      ],
    },
    "board-2": {
      id: "board-2",
      title: "In Progress",
      cards: [
        { id: "card-6", content: "Implement Login Feature" },
        { id: "card-7", content: "Develop API Endpoints" },
        { id: "card-8", content: "Set Up Database" },
        { id: "card-9", content: "Integrate Payment Gateway" },
        { id: "card-10", content: "Code Review Session" },
      ],
    },
    "board-3": {
      id: "board-3",
      title: "Testing",
      cards: [
        { id: "card-11", content: "Write Unit Tests" },
        { id: "card-12", content: "Test API Responses" },
        { id: "card-13", content: "Run UI Tests" },
        { id: "card-14", content: "Fix Bugs in Login" },
        { id: "card-15", content: "Verify Mobile Compatibility" },
      ],
    },
    "board-4": {
      id: "board-4",
      title: "Done",
      cards: [
        { id: "card-16", content: "Deploy to Staging" },
        { id: "card-17", content: "Submit Documentation" },
        { id: "card-18", content: "Client Demo Completed" },
        { id: "card-19", content: "Stakeholder Feedback" },
        { id: "card-20", content: "Launch on Production" },
      ],
    },
  },
  boardOrder: ["board-1", "board-2", "board-3", "board-4"],
};
