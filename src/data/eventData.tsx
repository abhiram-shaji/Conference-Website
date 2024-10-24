export interface Event {
  title: string;
  dateTime: string;
  location: string;
  description: string;
  cost: string;
  presenter?: string;
  submissionDeadline?: string;
  editor?: string;
  imageUrl?: string;
}

export const eventData: Event[] = [
{
  title: "Welcome & Keynote Address",
  dateTime: "Friday, January 19, 2024, 7:00 – 8:30 p.m.",
  location: "Stan Hagen Theatre, Komoux Hall",
  description: "The evening will open with a welcome address by the CV Writers Society President and the North Island College Liaison. Dr. Tilar Mazzeo will deliver a keynote on *The Nonfiction Contract: Fact-based Writing and the Limits of the Imagination*, exploring the balance between factual storytelling and creative freedom.",
  cost: "Free",
  imageUrl: "https://images.pexels.com/photos/3643925/pexels-photo-3643925.jpeg?auto=compress&cs=tinysrgb&w=600",
},
{
  title: "Saturday Morning Registration & Networking",
  dateTime: "Saturday, January 20, 2024, 8:30 – 8:55 a.m.",
  location: "NIC Courtenay Campus, Tyee Hall",
  description: "Kick off the day with in-person registration and an opportunity to network with other writers and presenters before the morning workshop sessions begin.",
  cost: "Free",
  imageUrl: "https://images.pexels.com/photos/7820308/pexels-photo-7820308.jpeg?auto=compress&cs=tinysrgb&w=600",
},
{
  title: "Saturday Workshop Sessions (Morning)",
  dateTime: "Saturday, January 20, 2024, 9:00 a.m. – 12:00 p.m.",
  location: "NIC Courtenay Campus, Tyee Hall",
  description: "The morning includes three-hour and five-hour workshop options on topics such as writing personal narratives, developing dialogue, and dynamic nonfiction storytelling.",
  cost: "$32.00 (3-hour workshops), $52.00 (5-hour workshops)",
  imageUrl: "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=600",
},
{
  title: "Lunch Break & Children’s Literature Discussion",
  dateTime: "Saturday, January 20, 2024, 12:00 – 1:30 p.m.",
  location: "NIC Courtenay Campus, Tyee Lounge",
  description: "Enjoy a brown bag lunch or visit nearby restaurants. Author Jordan Scott will lead a casual discussion on children’s literature from 12:30 – 1:15 p.m.",
  cost: "Free",
  imageUrl: "https://images.pexels.com/photos/3184347/pexels-photo-3184347.jpeg?auto=compress&cs=tinysrgb&w=600",
},
{
  title: "Saturday Workshop Sessions (Afternoon)",
  dateTime: "Saturday, January 20, 2024, 1:30 – 4:30 p.m.",
  location: "NIC Courtenay Campus, Tyee Hall",
  description: "Afternoon workshop options include topics such as flash fiction and continuing sessions on nonfiction writing. Both three-hour and five-hour workshops are available.",
  cost: "$32.00 (3-hour workshops), $52.00 (5-hour workshops)",
  imageUrl: "https://images.pexels.com/photos/3321791/pexels-photo-3321791.jpeg?auto=compress&cs=tinysrgb&w=600",
},
{
  title: "Writing Dynamic Narrative Nonfiction",
  dateTime: "Saturday, January 20, 2024, 9:00 a.m. – 3:30 p.m.",
  location: "Tyee Hall, Room 203",
  presenter: "Dr. Tilar Mazzeo",
  description: "Dr. Mazzeo’s workshop will explore how to tell compelling nonfiction stories while maintaining factual accuracy. Participants will learn about character development, pacing, and narrative tension. Ideal for writers of memoirs, history, and narrative nonfiction.",
  cost: "$52.00",
  imageUrl: "https://images.pexels.com/photos/1995842/pexels-photo-1995842.jpeg?auto=compress&cs=tinysrgb&w=600",
},
{
  title: "Telling Your Truth",
  dateTime: "Saturday, January 20, 2024, 9:00 a.m. – 12:00 p.m.",
  location: "Tyee Hall, Room 204",
  presenter: "Judy LeBlanc",
  description: "This workshop focuses on personal narratives and the role of memory in storytelling. Writers will explore using fictional techniques, personal reflection, and thematic resonance to craft engaging personal stories.",
  cost: "$32.00",
  imageUrl: "https://images.unsplash.com/photo-1685478237522-cef02a48043d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbmFsfGVufDB8fDB8fHww",
},
{
  title: "Flash Fiction: Make it Happen Fast",
  dateTime: "Saturday, January 20, 2024, 1:30 – 4:30 p.m.",
  location: "Tyee Hall, Room 205",
  presenter: "Robert Hilles",
  description: "This workshop will cover the art of writing flash fiction, a unique form of storytelling in the miniature. Participants will learn the key elements of flash fiction, distinguishing it from short stories, and share their own work for feedback.",
  cost: "$32.00",
  imageUrl: "https://images.pexels.com/photos/27451259/pexels-photo-27451259/free-photo-of-astronauta.jpeg?auto=compress&cs=tinysrgb&w=600",
},
{
  title: "The Intricacies of a Humourous Novel",
  dateTime: "Sunday, January 21, 2024, 9:00 a.m. – 3:30 p.m.",
  location: "Tyee Hall, Room 202",
  presenter: "Susan Juby",
  description: "This workshop will dive into the craft of writing humorous novels, with a focus on combining comedy with essential fiction techniques like character development, pacing, and dialogue. Writers in all genres can benefit from learning to add humor to their work.",
  cost: "$52.00",
  imageUrl: "https://images.pexels.com/photos/4114710/pexels-photo-4114710.jpeg?auto=compress&cs=tinysrgb&w=600",
},
{
  title: "Writing Deeper Dialogue",
  dateTime: "Sunday, January 21, 2024, 9:00 a.m. – 12:00 p.m.",
  location: "Tyee Hall, Room 204",
  presenter: "JP (Jo-Anne) McLean",
  description: "Learn how to write dialogue that goes beyond mere words, revealing character, advancing the plot, and heightening emotion. Participants will work on techniques to make their dialogue more impactful in their stories.",
  cost: "$32.00",
  imageUrl: "https://images.unsplash.com/photo-1519228172884-fba2696ae551?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RGVlcGVyfGVufDB8fDB8fHww",
},
{
  title: "How to Become a Trusted Environmental Writer",
  dateTime: "Sunday, January 21, 2024, 1:30 – 4:30 p.m.",
  location: "Tyee Hall, Room 205",
  presenter: "Guy Dauncey",
  description: "This workshop will guide participants through the process of writing impactful environmental articles, from choosing a theme to researching and finding outlets for publication. The session promises to be informative and fun.",
  cost: "$32.00",
  imageUrl: "https://images.pexels.com/photos/9160598/pexels-photo-9160598.jpeg?auto=compress&cs=tinysrgb&w=600",
},
{
  title: "Blue Pencil Café",
  dateTime: "Saturday & Sunday, January 20-21, 2024, Various 30-minute slots",
  location: "NIC Courtenay Campus, Tyee Hall",
  editor: "Dave Flawse",
  description: "Writers can receive personalized feedback on their manuscripts during 30-minute sessions with editor Dave Flawse. Ideal for fiction or nonfiction writers seeking expert advice on improving their work. Sessions are available in-person or via Zoom.",
  cost: "$62.00 per session",
  submissionDeadline: "January 12, 2024",
  imageUrl: "https://images.pexels.com/photos/1432516/pexels-photo-1432516.jpeg?auto=compress&cs=tinysrgb&w=600",
},
];
