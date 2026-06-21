"use client";

import React, { useState, useEffect } from 'react';

interface Moment {
  id: number;
  text: string;
  category: string;
  author: string;
  handle: string;
  time: string;
  likes: number;
  mubCount: number;
  replies: number;
  verified?: 'verified' | 'legend' | 'official';
}

const CATEGORIES = [
  'For You',
  'Human Truths',
  'Peak MUB Behavior',
  "That's My MUB",
  'MUB Reflections',
  'Verified',
];

const CATEGORY_STYLES: { [key: string]: string } = {
  'Human Truths': 'category-human-truths',
  'Peak MUB Behavior': 'category-peak-mub',
  "That's My MUB": 'category-thats-my-mub',
  'MUB Reflections': 'category-mub-reflections',
};

const INITIAL_MOMENTS: Moment[] = [
  {
    id: 1,
    text: "Opening the fridge five times hoping something new appears.",
    category: "Human Truths",
    author: "Fridge Phantom",
    handle: "@fridgephantom",
    time: "2h",
    likes: 42,
    mubCount: 18,
    replies: 7,
    verified: 'legend', // Chaos Legend - high engagement notable MUB
  },
  {
    id: 2,
    text: "Carrying every grocery bag at once because two trips are unacceptable.",
    category: "Peak MUB Behavior",
    author: "One Bag Hero",
    handle: "@onebaghero",
    time: "4h",
    likes: 67,
    mubCount: 29,
    replies: 12,
  },
  {
    id: 3,
    text: "The friend who gives terrible advice but is always there when it matters.",
    category: "That's My MUB",
    author: "Loyal Chaos",
    handle: "@loyalchaos",
    time: "1d",
    likes: 89,
    mubCount: 54,
    replies: 23,
    verified: 'verified', // Standard MUB Verified
  },
  {
    id: 4,
    text: "Pretending a wave did not just humble you at the beach.",
    category: "MUB Reflections",
    author: "Sunburned Truth",
    handle: "@sunburnedtruth",
    time: "2d",
    likes: 31,
    mubCount: 12,
    replies: 5,
  },
];

const USER_PROFILES: Record<string, { name: string; bio: string; avatar: string; verified?: 'verified' | 'legend' | 'official' }> = {
  '@you': {
    name: 'You',
    bio: 'Just a regular human trying to make sense of the chaos. Sharing the awkward, funny, and painfully relatable moments.',
    avatar: '☀️',
  },
  '@fridgephantom': {
    name: 'Fridge Phantom',
    bio: 'Professional fridge checker. 5x daily visitor. Never finds what I\'m looking for but keeps hoping.',
    avatar: '🥶',
    verified: 'legend',
  },
  '@onebaghero': {
    name: 'One Bag Hero',
    bio: 'I can carry it all. Two trips? Never heard of her. Grocery store legend.',
    avatar: '🛒',
  },
  '@loyalchaos': {
    name: 'Loyal Chaos',
    bio: 'The friend who gives bad advice but shows up when it counts. Certified MUB.',
    avatar: '🫂',
    verified: 'verified',
  },
  '@sunburnedtruth': {
    name: 'Sunburned Truth',
    bio: 'Beach philosopher. Waves humble me daily. Still pretending it didn\'t happen.',
    avatar: '🏖️',
  },
  '@boardwalkfail': {
    name: 'Beach Day Disaster',
    bio: 'Boardwalk expert. Sand in places sand should never be. Still coming back.',
    avatar: '🏄',
  },
  '@midnightmunch': {
    name: 'Fridge Raider',
    bio: 'Night time fridge explorer. The light hits different at 2am.',
    avatar: '🌙',
  },
  '@toomanytrips': {
    name: 'Lazy Genius',
    bio: 'I could make two trips... but why? Carrying it all is a personality trait.',
    avatar: '👜',
    verified: 'legend',
  },
};

const SUGGESTED_BUDDIES = [
  { name: "Beach Day Disaster", handle: "@boardwalkfail", verified: 'verified' as const },
  { name: "Fridge Raider", handle: "@midnightmunch" },
  { name: "Lazy Genius", handle: "@toomanytrips", verified: 'legend' as const },
];

export default function MUBConcept() {
  const [moments, setMoments] = useState<Moment[]>(INITIAL_MOMENTS);
  const [selectedTab, setSelectedTab] = useState('For You');
  const [newText, setNewText] = useState('');
  const [newCategory, setNewCategory] = useState('Human Truths');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userVerified, setUserVerified] = useState(false);
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  const [currentProfileHandle, setCurrentProfileHandle] = useState<string | null>(null);

  // Persist to localStorage
  useEffect(() => {
    const saved = localStorage.getItem('mub-moments');
    if (saved) {
      setMoments(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('mub-moments', JSON.stringify(moments));
  }, [moments]);

  const filteredMoments = selectedTab === 'For You' 
    ? moments 
    : selectedTab === 'Verified'
      ? moments.filter(m => m.verified)
      : moments.filter(m => m.category === selectedTab);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newText.trim()) return;

    setIsSubmitting(true);

    const newMoment: Moment = {
      id: Date.now(),
      text: newText.trim(),
      category: newCategory,
      author: "You",
      handle: "@you",
      time: "now",
      likes: 0,
      mubCount: 0,
      replies: 0,
      verified: userVerified ? 'verified' : undefined,
    };

    setMoments(prev => [newMoment, ...prev]);
    setNewText('');
    setNewCategory('Human Truths');

    setTimeout(() => setIsSubmitting(false), 300);
  };

  const handleLike = (id: number) => {
    setMoments(prev =>
      prev.map(m => m.id === id ? { ...m, likes: m.likes + 1 } : m)
    );
  };

  const handleMub = (id: number) => {
    setMoments(prev =>
      prev.map(m => m.id === id ? { ...m, mubCount: m.mubCount + 1 } : m)
    );
  };

  const getCategoryStyle = (cat: string) => CATEGORY_STYLES[cat] || 'bg-amber-100 text-amber-800';

  // MUB Verified Badge - inspired by X's public verification badge patterns (tiered trust signals next to handles)
  // Tiers:
  // - 'verified': Standard MUB Verified (notable for consistent human chaos)
  // - 'legend': MUB Legend (top contributors with massive engagement)
  // - 'official': Official (platform/brand accounts)
  // Visual: Small sun icon with color. Tooltip explains.
  // How verification works (design, MUB-flavored, no X copy):
  // - Apply with proof of notable moments (high mub/likes)
  // - Community upvote or manual review for authenticity
  // - "Sun Pass" subscription tier for faster review
  // - Goal: Reduce impersonation while celebrating real useless humans
  const VerifiedBadge = ({ tier }: { tier: 'verified' | 'legend' | 'official' }) => {
    const colors = {
      verified: 'text-sky-500',
      legend: 'text-amber-500',
      official: 'text-emerald-500',
    };
    const labels = {
      verified: 'MUB Verified',
      legend: 'MUB Legend',
      official: 'Official MUB',
    };
    return (
      <span 
        className={`inline ml-0.5 ${colors[tier]}`}
        title={`${labels[tier]} – verified for notable contributions to the MUB community`}
      >
        ☀️
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-[#fefce8] text-[#422006] flex">
      {/* Left Nav - X-inspired sidebar */}
      <div className="hidden md:flex w-64 flex-col border-r border-[#fef08c] bg-white/80 p-4 sticky top-0 h-screen">
        <div className="flex items-center gap-2 mb-8 px-3">
          <div className="text-3xl">☀️</div>
          <div>
            <div className="font-bold text-2xl tracking-tight">MUB</div>
            <div className="text-[10px] -mt-1 text-[#854d0e]">Only Human</div>
          </div>
        </div>

        <nav className="space-y-1 text-lg">
          <div 
            onClick={() => { setCurrentProfileHandle(null); setSelectedTab('For You'); }}
            className="flex items-center gap-4 px-3 py-3 rounded-full hover:bg-[#fef08c]/50 cursor-pointer font-medium bg-[#fef08c]/30"
          >
            <span>🏠</span> <span>Home</span>
          </div>
          <div onClick={() => { setSelectedTab('For You'); setCurrentProfileHandle(null); }} className="flex items-center gap-4 px-3 py-3 rounded-full hover:bg-[#fef08c]/50 cursor-pointer">
            <span>🔍</span> <span>Explore</span>
          </div>
          <div className="flex items-center gap-4 px-3 py-3 rounded-full hover:bg-[#fef08c]/50 cursor-pointer">
            <span>🔔</span> <span>Notifications</span>
          </div>
          <div className="flex items-center gap-4 px-3 py-3 rounded-full hover:bg-[#fef08c]/50 cursor-pointer">
            <span>✉️</span> <span>Messages</span>
          </div>
          <div 
            onClick={() => setCurrentProfileHandle('@you')}
            className="flex items-center gap-4 px-3 py-3 rounded-full hover:bg-[#fef08c]/50 cursor-pointer"
          >
            <span>📋</span> <span>My MUBs</span>
          </div>
        </nav>

        <button 
          onClick={() => document.getElementById('compose')?.scrollIntoView({ behavior: 'smooth' })}
          className="mub-button mt-auto mb-4 mx-3 py-3 rounded-full text-base font-semibold"
        >
          Share Moment
        </button>

        <div className="mt-auto text-xs px-3 text-[#854d0e]">
          @you {userVerified && <VerifiedBadge tier="verified" />} • MUB Concept
        </div>
      </div>

      {/* Main Column: Feed or Profile */}
      <div className="flex-1 max-w-[600px] border-r border-[#fef08c] min-h-screen">
        {currentProfileHandle ? (
          /* Profile Page View */
          (() => {
            const profile = USER_PROFILES[currentProfileHandle] || { 
              name: currentProfileHandle, 
              bio: 'A fellow human sharing the chaos.', 
              avatar: '☀️' 
            };
            const profileVerified = currentProfileHandle === '@you' ? (userVerified ? 'verified' : undefined) : (USER_PROFILES[currentProfileHandle]?.verified);
            const profileMoments = moments.filter(m => m.handle === currentProfileHandle);

            return (
              <div>
                {/* Profile Header - X style */}
                <div className="border-b border-[#fef08c] bg-white p-4">
                  <button 
                    onClick={() => setCurrentProfileHandle(null)}
                    className="text-sm text-[#f59e0b] hover:underline mb-3 flex items-center gap-1"
                  >
                    ← Back to feed
                  </button>

                  <div className="flex items-start gap-4">
                    <div className="w-20 h-20 bg-[#f59e0b] rounded-full flex items-center justify-center text-white text-4xl flex-shrink-0 border-4 border-[#fefce8]">
                      {profile.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold">{profile.name}</span>
                        {profileVerified && <VerifiedBadge tier={profileVerified} />}
                      </div>
                      <div className="text-[#854d0e]">{currentProfileHandle}</div>
                      <div className="mt-2 text-sm moment-text">{profile.bio}</div>

                      {/* Stats */}
                      <div className="flex gap-4 mt-3 text-sm">
                        <div><span className="font-bold">{profileMoments.length}</span> <span className="text-[#854d0e]">moments</span></div>
                        <div><span className="font-bold">{profileMoments.reduce((sum, m) => sum + m.likes, 0)}</span> <span className="text-[#854d0e]">likes</span></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Profile Timeline */}
                <div className="p-4 text-sm text-[#854d0e] border-b border-[#fef08c]">
                  {currentProfileHandle === '@you' ? 'Your MUB Moments' : `${profile.name}'s timeline`}
                </div>

                <div>
                  {profileMoments.length === 0 && (
                    <div className="p-8 text-center text-[#854d0e]">
                      No moments yet.
                    </div>
                  )}
                  {profileMoments.map((moment) => (
                    <div key={moment.id} className="border-b border-[#fef08c] px-4 py-3 hover:bg-[#fef08c]/10 flex gap-3">
                      <div className="w-10 h-10 bg-[#f59e0b] rounded-full flex-shrink-0 flex items-center justify-center text-white text-lg">{profile.avatar}</div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1 text-sm">
                          <span className="font-bold">{moment.author}{moment.verified && <VerifiedBadge tier={moment.verified} />}</span>
                          <span className="text-[#854d0e]">· {moment.handle}</span>
                          <span className="text-[#854d0e]">· {moment.time}</span>
                          <span className={`ml-auto category-pill ${getCategoryStyle(moment.category)}`}>{moment.category}</span>
                        </div>
                        <div className="moment-text py-1 pr-2">{moment.text}</div>
                        <div className="flex justify-between text-[#854d0e] mt-1 text-sm max-w-[420px]">
                          <button onClick={() => alert('Replies would open here (concept)')} className="flex items-center gap-1 hover:text-[#f59e0b]">
                            💬 <span>{moment.replies}</span>
                          </button>
                          <button onClick={() => handleMub(moment.id)} className="flex items-center gap-1 hover:text-[#f59e0b]">
                            🔁 <span>{moment.mubCount}</span>
                          </button>
                          <button onClick={() => handleLike(moment.id)} className="flex items-center gap-1 hover:text-[#f59e0b]">
                            ❤️ <span>{moment.likes}</span>
                          </button>
                          <button className="flex items-center gap-1 hover:text-[#f59e0b]">📤</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()
        ) : (
          /* Normal Feed */
          <>
            {/* Top bar */}
            <div className="sticky top-0 z-40 bg-[#fefce8]/95 backdrop-blur border-b border-[#fef08c] px-4 py-3 flex items-center justify-between">
              <div className="font-bold text-xl flex items-center gap-2">
                <span className="md:hidden">☀️</span> Home
              </div>
              <div className="text-xs px-2 py-0.5 bg-white/70 rounded border border-[#fef08c]">Concept</div>
            </div>

            {/* Compose Box - X style */}
            <div id="compose" className="border-b border-[#fef08c] bg-white p-4">
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-[#f59e0b] rounded-full flex items-center justify-center text-white text-xl flex-shrink-0">☀️</div>
                
                <form onSubmit={handleSubmit} className="flex-1">
                  <textarea
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                    placeholder="What's your useless moment today?"
                    className="w-full bg-transparent resize-y min-h-[60px] text-lg placeholder:text-[#854d0e]/60 focus:outline-none moment-text"
                    maxLength={280}
                  />

                  <div className="flex items-center justify-between pt-2 border-t border-[#fef08c]">
                    <div className="flex gap-2 flex-wrap">
                      {CATEGORIES.slice(1).map(cat => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => setNewCategory(cat)}
                          className={`text-xs px-2 py-0.5 rounded-full border ${newCategory === cat ? 'bg-[#f59e0b] text-white border-[#f59e0b]' : 'bg-white border-[#fef08c] hover:bg-[#fef08c]/50'}`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xs text-[#854d0e]">{newText.length}/280</span>
                      <button 
                        type="submit" 
                        disabled={isSubmitting || !newText.trim()}
                        className="mub-button px-5 py-1.5 rounded-full text-sm font-semibold disabled:opacity-50"
                      >
                        {isSubmitting ? 'Posting...' : 'Post'}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Tabs like X For You / Following */}
            <div className="flex border-b border-[#fef08c] bg-white/50">
              {CATEGORIES.map(tab => (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`flex-1 py-4 text-sm font-medium relative ${selectedTab === tab ? 'text-[#422006]' : 'text-[#854d0e]/70 hover:text-[#422006]'}`}
                >
                  {tab}
                  {selectedTab === tab && <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-1 bg-[#f59e0b] rounded-t"></div>}
                </button>
              ))}
            </div>

            {/* Feed - X style timeline */}
            <div>
              {filteredMoments.length === 0 && (
                <div className="p-8 text-center text-[#854d0e]">
                  Nothing here yet. Post something!
                </div>
              )}

              {filteredMoments.map((moment) => (
                <div key={moment.id} className="border-b border-[#fef08c] px-4 py-3 hover:bg-[#fef08c]/10 flex gap-3">
                  {/* Avatar */}
                  <div className="w-10 h-10 bg-[#f59e0b] rounded-full flex-shrink-0 flex items-center justify-center text-white text-lg">☀️</div>

                  <div className="flex-1 min-w-0">
                    {/* Header - X-inspired with verified badge */}
                    <div className="flex items-center gap-1 text-sm">
                      <span 
                        className="font-bold cursor-pointer hover:underline"
                        onClick={() => setCurrentProfileHandle(moment.handle)}
                      >
                        {moment.author}{moment.verified && <VerifiedBadge tier={moment.verified} />}
                      </span>
                      <span 
                        className="text-[#854d0e] cursor-pointer hover:underline"
                        onClick={() => setCurrentProfileHandle(moment.handle)}
                      >
                        · {moment.handle}
                      </span>
                      <span className="text-[#854d0e]">· {moment.time}</span>
                      <span className={`ml-auto category-pill ${getCategoryStyle(moment.category)}`}>{moment.category}</span>
                    </div>

                    {/* Text */}
                    <div className="moment-text py-1 pr-2">{moment.text}</div>

                    {/* Action bar - X style */}
                    <div className="flex justify-between text-[#854d0e] mt-1 text-sm max-w-[420px]">
                      <button onClick={() => alert('Replies would open here (concept)')} className="flex items-center gap-1 hover:text-[#f59e0b]">
                        💬 <span>{moment.replies}</span>
                      </button>
                      <button onClick={() => handleMub(moment.id)} className="flex items-center gap-1 hover:text-[#f59e0b]">
                        🔁 <span>{moment.mubCount}</span>
                      </button>
                      <button onClick={() => handleLike(moment.id)} className="flex items-center gap-1 hover:text-[#f59e0b]">
                        ❤️ <span>{moment.likes}</span>
                      </button>
                      <button className="flex items-center gap-1 hover:text-[#f59e0b]">📤</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Right Sidebar - X style */}
      <div className="hidden lg:flex w-80 flex-col p-4 sticky top-0 h-screen border-l border-[#fef08c] bg-white/60">
        {/* Search */}
        <div className="mb-4">
          <input 
            type="text" 
            placeholder="Search MUB moments" 
            className="w-full bg-white border border-[#fef08c] rounded-full px-4 py-2 text-sm focus:outline-none focus:border-[#f59e0b]" 
          />
        </div>

        {/* Trending / What's buzzing */}
        <div className="bg-white border border-[#fef08c] rounded-2xl p-4 mb-4">
          <div className="font-bold mb-3">What's buzzing</div>
          <div className="space-y-2 text-sm">
            {CATEGORIES.slice(1).map((cat, i) => (
              <div key={i} className="hover:bg-[#fef08c]/50 p-1 rounded cursor-pointer" onClick={() => setSelectedTab(cat)}>
                <div className="text-xs text-[#854d0e]">Trending in MUB</div>
                <div className="font-medium">{cat}</div>
                <div className="text-xs text-[#854d0e]">{Math.floor(Math.random() * 400) + 50}k moments</div>
              </div>
            ))}
          </div>
        </div>

        {/* Who to follow - Buddies */}
        <div className="bg-white border border-[#fef08c] rounded-2xl p-4">
          <div className="font-bold mb-3">Buddies to follow</div>
          {SUGGESTED_BUDDIES.map((buddy, i) => (
            <div key={i} className="flex items-center justify-between py-2 hover:bg-[#fef08c]/30 -mx-1 px-1 rounded">
              <div 
                onClick={() => setCurrentProfileHandle(buddy.handle)}
                className="cursor-pointer"
              >
                <div className="font-semibold text-sm hover:underline">
                  {buddy.name}
                  {buddy.verified && <VerifiedBadge tier={buddy.verified} />}
                </div>
                <div className="text-xs text-[#854d0e] hover:underline">{buddy.handle}</div>
              </div>
              <button className="text-xs border border-[#f59e0b] text-[#f59e0b] px-3 py-1 rounded-full hover:bg-[#f59e0b] hover:text-white">Follow</button>
            </div>
          ))}
          <div className="text-[#f59e0b] text-sm mt-2 cursor-pointer hover:underline">Show more</div>
        </div>

        {/* Get Verified - MUB flavored verification system (X-inspired tiers + process) */}
        <div className="bg-white border border-[#fef08c] rounded-2xl p-4 mt-4">
          <div className="font-bold mb-2 flex items-center gap-1">☀️ Get MUB Verified</div>
          <div className="text-xs text-[#854d0e] mb-2">
            Stand out as a notable human. Tiers: Verified (notable moments), Legend (top chaos), Official.
          </div>
          <div className="text-[10px] mb-2">
            Criteria: 10k+ total engagements • Community upvotes • No violations
            <br />Or subscribe to Sun Pass for priority.
          </div>
          <button 
            onClick={() => setShowVerifyModal(true)}
            className="text-xs w-full border border-[#f59e0b] text-[#f59e0b] px-3 py-1 rounded-full hover:bg-[#f59e0b] hover:text-white"
          >
            Apply Now
          </button>
        </div>

        <div className="mt-auto text-[10px] text-[#854d0e] px-2">
          MUB concept inspired by public social feed patterns. Not real data.
        </div>
      </div>

      {/* Verification Modal - like X's application flow (mocked) */}
      {showVerifyModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6">
            <h2 className="text-xl font-bold mb-2 flex items-center gap-2">☀️ Get MUB Verified</h2>
            <p className="text-sm text-[#854d0e] mb-4">Apply to stand out as a notable human in the community. Approval based on authentic moments and engagement.</p>
            
            <form onSubmit={(e) => {
              e.preventDefault();
              setUserVerified(true);
              setShowVerifyModal(false);
              // In real: submit to backend for review
            }} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Your notable MUB moment (link or describe)</label>
                <input type="text" placeholder="e.g. My viral 'I got this' beach fail" className="w-full border border-[#fef08c] rounded-xl px-3 py-2 text-sm" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Why you deserve the badge</label>
                <textarea placeholder="Share your top chaotic moments that brought the community together..." className="w-full border border-[#fef08c] rounded-xl px-3 py-2 text-sm h-24" required />
              </div>
              <div className="flex items-center gap-2 text-xs">
                <input type="checkbox" required /> <span>I agree to community guidelines and that my moments are real.</span>
              </div>
              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setShowVerifyModal(false)} className="flex-1 py-2 rounded-full border border-[#fef08c] text-sm">Cancel</button>
                <button type="submit" className="mub-button flex-1 py-2 rounded-full text-sm font-semibold">Submit Application</button>
              </div>
            </form>
            <p className="text-[10px] text-center mt-3 text-[#854d0e]">Once approved (instant in this demo), your posts will show the ☀️ badge like on X.</p>
          </div>
        </div>
      )}
    </div>
  );
}
