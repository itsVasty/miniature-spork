// Mock YouTube video data using Pexels stock thumbnails
const channels = [
  { name: 'Lo-fi Beats', handle: '@lofiworld', avatar: 'https://i.pravatar.cc/100?img=1' },
  { name: 'Tech Insights', handle: '@techinsights', avatar: 'https://i.pravatar.cc/100?img=33' },
  { name: 'Wanderlust Travel', handle: '@wanderlust', avatar: 'https://i.pravatar.cc/100?img=5' },
  { name: "Chef's Table", handle: '@chefstable', avatar: 'https://i.pravatar.cc/100?img=7' },
  { name: 'Fit & Active', handle: '@fitactive', avatar: 'https://i.pravatar.cc/100?img=12' },
  { name: 'GameSphere', handle: '@gamesphere', avatar: 'https://i.pravatar.cc/100?img=15' },
  { name: 'Nature Docs', handle: '@naturedocs', avatar: 'https://i.pravatar.cc/100?img=20' },
  { name: 'Art Studio', handle: '@artstudio', avatar: 'https://i.pravatar.cc/100?img=25' },
  { name: 'CodeCraft', handle: '@codecraft', avatar: 'https://i.pravatar.cc/100?img=30' },
  { name: 'Music Vibes', handle: '@musicvibes', avatar: 'https://i.pravatar.cc/100?img=40' },
  { name: 'Daily Vlogs', handle: '@dailyvlogs', avatar: 'https://i.pravatar.cc/100?img=50' },
  { name: 'Science Today', handle: '@sciencetoday', avatar: 'https://i.pravatar.cc/100?img=60' },
];

const thumbnails = [
  'https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg?auto=compress&cs=tinysrgb&w=640',
  'https://images.pexels.com/photos/1763067/pexels-photo-1763067.jpeg?auto=compress&cs=tinysrgb&w=640',
  'https://images.pexels.com/photos/2432066/pexels-photo-2432066.jpeg?auto=compress&cs=tinysrgb&w=640',
  'https://images.pexels.com/photos/316466/pexels-photo-316466.jpeg?auto=compress&cs=tinysrgb&w=640',
  'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=640',
  'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=640',
  'https://images.pexels.com/photos/2425567/pexels-photo-2425567.jpeg?auto=compress&cs=tinysrgb&w=640',
  'https://images.pexels.com/photos/3787839/pexels-photo-3787839.jpeg?auto=compress&cs=tinysrgb&w=640',
  'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&w=640',
  'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=640',
  'https://images.pexels.com/photos/3573555/pexels-photo-3573555.jpeg?auto=compress&cs=tinysrgb&w=640',
  'https://images.pexels.com/photos/1631437/pexels-photo-1631437.jpeg?auto=compress&cs=tinysrgb&w=640',
];

const titles = [
  'Building a React App from Scratch in 2024',
  'The Ultimate Travel Guide to Japan',
  'How to Make the Perfect Pasta at Home',
  '10-Minute Full Body Workout (No Equipment)',
  'The Most Beautiful Places on Earth',
  'Why This Game Changed Everything',
  'Lo-fi Hip Hop Radio - Beats to Relax/Study',
  'I Tried Living Off the Grid for 30 Days',
  'Understanding JavaScript Promises',
  'The Science of Black Holes Explained',
  'My Morning Routine That Actually Works',
  'Top 10 Hidden Gems in Europe',
  "Cooking with Fire: A Chef's Journey",
  'How AI Will Change the World by 2030',
  'The History of Music in 15 Minutes',
  'A Day in the Life of a Software Engineer',
  'Mountain Climbing: Reaching the Summit',
  'Why You Should Start Journaling Today',
  'The Best Coding Setup for Productivity',
  'Exploring the Amazon Rainforest',
  'Digital Art: From Sketch to Final',
  'The Truth About Productivity Hacks',
  'How to Learn Anything Fast',
  'Behind the Scenes: Making a Short Film',
];

const categories = [
  'All', 'Music', 'Gaming', 'Live', 'Mixes', 'News', 'Sports', 'Podcasts',
  'Recently uploaded', 'New to you', 'JavaScript', 'Travel', 'Cooking', 'Fitness',
];

function pick(arr, i) {
  return arr[i % arr.length];
}

const videos = [];
for (let i = 0; i < 24; i++) {
  const ch = pick(channels, i);
  videos.push({
    id: i + 1,
    title: pick(titles, i),
    thumbnail: pick(thumbnails, i),
    channel: ch.name,
    channelAvatar: ch.avatar,
    channelHandle: ch.handle,
    views: `${(1 + (i * 7) % 9)}.${(i * 13) % 9}M views`,
    uploaded: `${(1 + i) % 12} ${(i % 2 === 0) ? 'days' : 'weeks'} ago`,
    duration: `${(5 + i * 3) % 25}:${String((10 + i * 7) % 60).padStart(2, '0')}`,
    category: pick(categories.slice(1), i),
  });
}

export { videos, categories };
