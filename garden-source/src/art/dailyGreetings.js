// ============================================================================
// LIVING DAILY ENTRY GREETING & GARDEN WHISPERS
// Subtle sanctuary titles, time-of-day awareness, and 32 rotating daily lines
// so every visit feels warm, quiet, and fresh without repeating a static intro.
// ============================================================================

const DAILY_WHISPERS = [
  'The lanterns stayed lit for you. Wander wherever you feel like today.',
  'The koi are tracing slow circles beneath the lily pads today.',
  'Hope today is being gentle with you—take a slow breath if it isn’t.',
  'A few cherry blossoms drifted across the stone path while you were away.',
  'The choir organ is tuned whenever you feel like playing a few notes.',
  'Don’t forget to drink some water and rest your eyes for a minute today.',
  'The little spirit near the pavilion is still pretending not to watch.',
  'Even ordinary days deserve a quiet corner with warm lights.',
  'If today felt heavy, send a wish lantern up into the sky before you go.',
  'The lotus at the end of the path catches the lantern light differently each evening.',
  'No rush here—just stone paths, warm paper lamps, and drifting petals.',
  'Some small university moments stay warmer than you expect them to.',
  'A gentle breeze is moving through the sakura canopy right now.',
  'The Firefly Pond is calm today—watch the petals make tiny ripples on the water.',
  'Whenever lectures or deadlines pile up, this little corner stays quiet.',
  'You can sit back and press T if you just want the garden to walk for you.',
  'Every lantern along the path holds a tiny glow waiting for you to pass by.',
  'Small kindnesses and random chats tend to linger longer than big days.',
  'Try switching the sky with V—the blossoms look completely different under starlight.',
  'The pavilion tea table is always set, even when the garden is quiet.',
  'Here’s to getting through today one small step at a time.',
  'The blue wildflowers along the stones caught a bit of the dusk light.',
  'A few fireflies wandered over from the pond to check on the lantern gate.',
  'Take a postcard snapshot anytime if a view along the path makes you smile.',
  'The garden doesn’t keep track of deadlines—only lanterns, koi, and blossoms.',
  'Some places feel nicer simply because of the memories tucked inside them.',
  'If you’re studying late, pause for a minute and listen to the pond shimmer.',
  'The birthday candle on the table can always be relit whenever you want a wish.',
  'Quiet paths are good for clearing a busy mind.',
  'The sakura petals never really run out here, no matter what season it is.',
  'Little moments have a funny way of turning into favorite memories.',
  'The lantern gate is always open whenever you want a peaceful minute.'
];

const SPECIAL_DATE_WHISPERS = {
  '10-15': 'Happy birthday—the cupcake candle along the path is lit and waiting for a wish.',
  '11-12': 'A quiet nod to that last lecture day, a little Panadol, and a goodbye wave.'
};

function hashDateKey(dateKey) {
  let h = 2166136261;
  for (let i = 0; i < dateKey.length; i++) {
    h ^= dateKey.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h >>> 0);
}

function getTimeSlot(hour) {
  if (hour >= 5 && hour < 12) {
    return {
      slot: 'morning',
      eyebrow: '✦ GOOD MORNING ✦',
      headingHtml: 'Morning <em>Blossoms</em>',
      moodIndex: 1, // Golden Hour
      moodIcon: '☀',
      moodName: 'Golden Hour'
    };
  }
  if (hour >= 12 && hour < 17) {
    return {
      slot: 'afternoon',
      eyebrow: '✦ GOOD AFTERNOON ✦',
      headingHtml: 'A Little <em>Place</em>',
      moodIndex: 1, // Golden Hour
      moodIcon: '☀',
      moodName: 'Golden Hour'
    };
  }
  if (hour >= 17 && hour < 21) {
    return {
      slot: 'evening',
      eyebrow: '✦ GOOD EVENING ✦',
      headingHtml: 'Twilight <em>Sanctuary</em>',
      moodIndex: 0, // Amethyst Twilight
      moodIcon: '☾',
      moodName: 'Twilight'
    };
  }
  return {
    slot: 'night',
    eyebrow: '✦ QUIET NIGHT ✦',
    headingHtml: 'Starry <em>Garden</em>',
    moodIndex: 2, // Starry Night
    moodIcon: '★',
    moodName: 'Starry Night'
  };
}

export function getEntryGreeting({
  now = new Date(),
  visitCount = 0,
  memoriesFound = 0,
  totalMemories = 10,
  wishLanternCount = 0
} = {}) {
  const hour = now.getHours();
  const timeInfo = getTimeSlot(hour);
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  const dateKey = `${yyyy}-${mm}-${dd}`;
  const mmdd = `${mm}-${dd}`;

  const dateTag = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }).toUpperCase();
  const isFirstVisit = visitCount <= 0;

  let lead;
  if (SPECIAL_DATE_WHISPERS[mmdd]) {
    lead = SPECIAL_DATE_WHISPERS[mmdd];
  } else if (isFirstVisit) {
    lead =
      'A quiet sanctuary beneath the cherry blossoms—holding warm stone lanterns, ten small moments along the path, and a lotus flower waiting to bloom at the end.';
  } else {
    const idx = hashDateKey(dateKey) % DAILY_WHISPERS.length;
    lead = DAILY_WHISPERS[idx];
  }

  const trailLabel =
    memoriesFound >= totalMemories
      ? '✿ All Memories Found'
      : `✿ ${memoriesFound} / ${totalMemories} Memories`;

  let extraLabel;
  if (wishLanternCount > 0) {
    extraLabel = `✦ ${wishLanternCount} Wish ${wishLanternCount === 1 ? 'Lantern' : 'Lanterns'} Aloft`;
  } else if (memoriesFound >= totalMemories) {
    extraLabel = '❀ Lotus in Full Bloom';
  } else if (memoriesFound >= 5) {
    extraLabel = '❀ Lotus Unfurling';
  } else {
    extraLabel = '❀ Lotus Budding';
  }

  return {
    slot: timeInfo.slot,
    dateKey,
    eyebrow: `${timeInfo.eyebrow.replace(/ ✦$/, '')} · ${dateTag} ✦`,
    headingHtml: isFirstVisit ? 'A Little <em>Place</em>' : timeInfo.headingHtml,
    lead,
    buttonLabel: isFirstVisit ? 'step into the garden →' : 'return to the garden →',
    moodIndex: timeInfo.moodIndex,
    skyPill: `${timeInfo.moodIcon} ${timeInfo.moodName}`,
    trailPill: trailLabel,
    extraPill: extraLabel
  };
}
