// src/data/mockData.js

// Rotating alerts for the Alerts component
export const mockAlerts = [
  "Gate 2 congestion increasing due to security check. Please use Gate 1 or 3.",
  "Food Court B waiting time reduced to 5 minutes.",
  "Exit Corridor near Block A temporarily crowded."
];

// Live venue status values for the LiveStatus component
export const liveVenueStatus = [
  { id: 'gate1', label: 'Gate 1 Crowd', value: 'Heavy', colorClass: 'text-danger' },
  { id: 'gate3', label: 'Gate 3 Crowd', value: 'Light', colorClass: 'text-success' },
  { id: 'food', label: 'Food Wait Avg', value: '15 mins', colorClass: 'text-warning' },
  { id: 'restrooms', label: 'Restrooms A', value: 'Available', colorClass: 'text-success' },
];

// Venue zone overview data for the VenueMap component
export const venueZones = [
  { id: 1, name: 'Gate Zone', status: 'Crowded', colorClass: 'text-danger' },
  { id: 2, name: 'Food Court', status: 'Moderate', colorClass: 'text-warning' },
  { id: 3, name: 'Seating Block A', status: 'Free', colorClass: 'text-success' },
  { id: 4, name: 'Exit Corridor', status: 'Free', colorClass: 'text-success' },
];

// Hardcoded logic mappings for the Recommendation component
export const getRecommendationText = (need, location) => {
  switch (need) {
    case 'Entry':
      return "Gate 3 is currently the least crowded. Proceed there for fastest entry.";
    case 'Food':
      return "The Burger Stand near Block B has the shortest wait time (2 mins).";
    case 'Restroom':
      if (location && location.includes("Block")) {
        return "Nearest available restroom is under Section A2. No wait.";
      }
      return "Restrooms near Gate 1 are full. Use the Food Court restrooms.";
    case 'Exit':
      return "Use the East Exit route to avoid the main crowd heading towards the parking lot.";
    default:
      return "Proceed to the main concourse for assistance.";
  }
};
