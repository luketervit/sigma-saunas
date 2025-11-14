# **Sauna Coach - 5-Person Implementation Plan**

## **Team Roles & Responsibilities**

---

### **Person 1: Backend & n8n Orchestration Lead** 🔧
**Your job: Make everything talk to each other**

#### Friday Night (3-4 hours):
- [ ] Set up n8n instance (cloud.n8n.io - free trial)
- [ ] Get Harvia GraphQL API credentials from mentors
- [ ] Create Supabase project (database)
- [ ] Build basic n8n workflow: Harvia sensor → Supabase
- [ ] Test polling live sensor data from Junction saunas
- [ ] Document API endpoints for team

#### Saturday Morning (4 hours):
- [ ] Build n8n workflow: Session Detection
  - Trigger: Presence detected
  - Store: Session start time, initial temp/humidity
  - Webhook: Notify other services
- [ ] Build n8n workflow: Real-time Monitoring
  - Poll sensor every 10 seconds
  - Store readings in Supabase
  - Expose REST endpoint for frontend/watch

#### Saturday Afternoon (4 hours):
- [ ] Integrate Claude API into n8n
- [ ] Build "Session Analysis" workflow:
  - Input: Current temp, humidity, duration, HR (from Person 2)
  - Claude: Generate personalized advice
  - Output: Text response → Person 3 for voice
- [ ] Build "Safety Monitor" workflow:
  - If HR > 140 OR temp > 95°C for 20min
  - Trigger alert to Apple Watch (Person 2)

#### Saturday Evening (3 hours):
- [ ] Build "Daily Summary" workflow
- [ ] Integrate all webhooks from other team members
- [ ] Create admin dashboard in n8n to show live data
- [ ] Test end-to-end flows

#### Sunday (6 hours):
- [ ] Build 2-3 impressive automation workflows
- [ ] Polish n8n visual workflows for demo
- [ ] Create workflow documentation/diagrams
- [ ] Help debug integrations
- [ ] Prepare n8n demo section

**Tech Stack:** n8n, Supabase, Harvia GraphQL API, Claude API

---

### **Person 2: Apple Watch & iOS Developer** ⌚
**Your job: Build the Apple Watch companion app**

#### Friday Night (3-4 hours):
- [ ] Set up Xcode project (SwiftUI + WatchOS)
- [ ] Create basic Watch app UI mockup
- [ ] Research HealthKit APIs (heart rate, HRV)
- [ ] Test HealthKit permissions on device

#### Saturday Morning (4 hours):
- [ ] Implement HealthKit integration
  - Real-time heart rate monitoring
  - HRV data collection
  - Workout session tracking
- [ ] Create Watch face complications (temp, HR, timer)
- [ ] Build simple REST client to fetch sensor data from Person 1

#### Saturday Afternoon (4 hours):
- [ ] Build main Watch app screens:
  - Live sauna stats (temp, humidity, duration)
  - Heart rate display with visual indicator
  - Session timer with controls
- [ ] Implement haptic feedback for alerts
- [ ] Add "Start Session" / "End Session" buttons
- [ ] POST heart rate data to Person 1's backend

#### Saturday Evening (3 hours):
- [ ] Implement safety alerts (vibration + notification)
- [ ] Add breathing exercise UI (with haptics)
- [ ] Build session summary view
- [ ] Test notifications from n8n workflows

#### Sunday (6 hours):
- [ ] Polish UI/UX
- [ ] Add more complications and widgets
- [ ] Implement session history view
- [ ] Create iPhone companion app (optional but nice)
- [ ] Record Watch demo video in sauna
- [ ] Help with final integration testing

**Tech Stack:** SwiftUI, WatchOS, HealthKit, URLSession

---

### **Person 3: Voice & AI Integration** 🎤
**Your job: Make the AI talk and listen**

#### Friday Night (3-4 hours):
- [ ] Set up ElevenLabs account (get API key)
- [ ] Create 2-3 voice profiles (calm coach, energetic, Finnish accent?)
- [ ] Test basic TTS: text → audio file
- [ ] Research Web Speech API for voice input
- [ ] Sketch out conversation flows

#### Saturday Morning (4 hours):
- [ ] Build voice input system (Web Speech API)
- [ ] Create command parser:
  - "How am I doing?" → trigger analysis
  - "What's my heart rate?" → fetch from watch
  - "Start guided session" → trigger workflow
- [ ] Build Claude conversation handler
- [ ] Connect to Person 1's n8n webhooks

#### Saturday Afternoon (4 hours):
- [ ] Build ElevenLabs integration module
- [ ] Create conversation templates:
  - Session guidance script
  - Safety warnings
  - Encouragement phrases
  - Finnish sauna education
- [ ] Implement real-time voice responses
- [ ] Add audio playback queue system

#### Saturday Evening (3 hours):
- [ ] Build "Guided Session" feature
  - Multi-step voice instructions
  - Timed prompts (löyly at 5min, break at 15min)
  - Adaptive based on sensor + HR data
- [ ] Create personality modes (calm, motivational, educational)
- [ ] Test latency (voice input → response)

#### Sunday (6 hours):
- [ ] Polish conversation flows
- [ ] Add more voice commands
- [ ] Create "Daily Wellness Report" voice generation
- [ ] Record audio demos
- [ ] Build voice interaction demo script
- [ ] Prepare live demo (practice in sauna!)

**Tech Stack:** ElevenLabs API, Web Speech API, Claude API, JavaScript/TypeScript

---

### **Person 4: Frontend Web App Developer** 💻
**Your job: Build the main user interface**

#### Friday Night (3-4 hours):
- [ ] Set up Next.js project (or Vite + React)
- [ ] Choose UI library (shadcn/ui recommended)
- [ ] Create basic layout and routing
- [ ] Use v0.dev to generate component mockups
- [ ] Set up Supabase client

#### Saturday Morning (4 hours):
- [ ] Build Dashboard page:
  - Live sauna stats (temp, humidity chart)
  - Current session timer
  - Heart rate display
  - "Start Voice Coach" button
- [ ] Integrate real-time updates (WebSocket or polling)
- [ ] Create responsive mobile layout

#### Saturday Afternoon (4 hours):
- [ ] Build Session History page:
  - List of past sessions
  - Stats visualization (Chart.js / Recharts)
  - Correlation graphs (sauna vs sleep/HRV)
- [ ] Build Guided Sessions page:
  - Browse session types (Traditional, Recovery, Quick)
  - Voice coach integration (Person 3)
- [ ] Add authentication (Supabase Auth - optional)

#### Saturday Evening (3 hours):
- [ ] Build Social/Leaderboard page:
  - Live Junction sauna occupancy
  - Team challenges
  - Personal achievements
- [ ] Add Settings page:
  - Voice preferences
  - Safety thresholds
  - Integrations (Apple Watch, Oura)
- [ ] Polish animations and transitions

#### Sunday (6 hours):
- [ ] Build landing page / pitch deck site
- [ ] Create demo mode (simulated data)
- [ ] Add onboarding flow
- [ ] Polish UI/UX details
- [ ] Make it look GORGEOUS
- [ ] Optimize performance
- [ ] Deploy to Vercel

**Tech Stack:** Next.js, shadcn/ui, Recharts, Supabase, v0.dev for rapid prototyping

---

### **Person 5: AI Tools Specialist & Demo Producer** 🎬
**Your job: Document AI usage + create killer demo**

#### Friday Night (3-4 hours):
- [ ] Set up screen recording tools (Loom, OBS)
- [ ] Document team's AI tool usage:
  - Every time someone uses Claude/Cursor/v0
  - Screenshot prompts and outputs
  - Track time saved
- [ ] Create shared document for AI usage logs
- [ ] Help team members with AI prompts

#### Saturday Morning (4 hours):
- [ ] Use Claude to generate:
  - Session coaching scripts for Person 3
  - Sample wellness insights/correlations
  - Marketing copy for landing page
  - Finnish sauna facts/traditions
- [ ] Build demo dataset (if real data limited):
  - Historical sessions
  - User profiles
  - Correlation data
- [ ] Help teammates debug with AI

#### Saturday Afternoon (4 hours):
- [ ] Record B-roll footage:
  - Junction sauna sessions
  - Team working with AI tools
  - Apple Watch in action
  - Voice interactions
- [ ] Create presentation deck (use Gamma.app or Claude)
- [ ] Write demo script
- [ ] Film testimonials/reactions

#### Saturday Evening (3 hours):
- [ ] Start editing demo video
- [ ] Create "AI-native development" showcase:
  - Before/after using AI tools
  - Speed comparisons
  - Code generation examples
- [ ] Design pitch deck
- [ ] Practice presentation with team

#### Sunday (6 hours):
- [ ] Finalize demo video (3-5 minutes)
- [ ] Create backup demo (if live demo fails)
- [ ] Compile AI usage documentation:
  - Tools used per feature
  - Productivity metrics
  - Example prompts that worked well
- [ ] Design one-pager/poster
- [ ] Help team prepare live demo
- [ ] Run through presentation 3+ times
- [ ] Submit all materials

**Tech Stack:** Claude, v0.dev, Cursor, Gamma.app, Loom/OBS, Figma

---

## **Integration Points (Critical!)**

### APIs Between Team Members:

**Person 1 (Backend) provides:**
- `GET /api/live-data` → Current temp, humidity, presence
- `GET /api/session/{id}` → Session details
- `POST /api/heart-rate` → Receive HR from Watch (Person 2)
- `GET /api/analysis` → Claude-generated insights
- Webhooks for: session start, alerts, session end

**Person 2 (Watch) provides:**
- Heart rate data → POST to Person 1
- Session controls → Trigger n8n workflows

**Person 3 (Voice) uses:**
- Person 1's analysis endpoint
- Person 2's heart rate data (via Person 1)
- Triggers n8n workflows via webhooks

**Person 4 (Frontend) uses:**
- All of Person 1's endpoints
- Embeds Person 3's voice interface
- Displays Person 2's watch data

**Person 5 (Demo) documents:**
- Everyone's AI tool usage
- Creates showcase of the whole system

---

## **Communication Protocol**

### Shared Resources:
- [ ] Shared Notion/Google Doc for API documentation
- [ ] GitHub repo (one person manages merges)
- [ ] Slack/Discord channel
- [ ] Shared Figma for designs
- [ ] Shared environment variables (.env template)

### Check-in Schedule:
- **Friday 11 PM:** Quick sync after setup
- **Saturday 10 AM:** Integration planning meeting
- **Saturday 2 PM:** First integration test
- **Saturday 7 PM:** Feature freeze check
- **Sunday 10 AM:** Demo run-through
- **Sunday 2 PM:** Final polish sync
- **Sunday Evening:** Submission prep

---

## **MVP Must-Haves (Don't Skip These)**

✅ Live sensor data display (temp, humidity)  
✅ Voice interaction (at least 3 commands)  
✅ Apple Watch HR monitoring  
✅ One n8n workflow working end-to-end  
✅ One "wow" feature (guided session or safety alert)  
✅ Working demo in actual Junction sauna  
✅ Documentation of AI tools used  

---

## **Stretch Goals (If Time)**

🎯 Oura Ring integration  
🎯 Multi-language support (ElevenLabs)  
🎯 Social features (leaderboard, challenges)  
🎯 Correlation analysis (sauna → sleep quality)  
🎯 Mobile app (React Native)  
🎯 Matter/HomeKit integration  

---

## **Demo Day Strategy (Sunday Evening)**

### 3-Minute Pitch Structure:
1. **Problem** (30s): People don't know how to sauna properly, safety concerns
2. **Solution** (30s): AI-powered voice coach + biometric monitoring
3. **Live Demo** (90s): 
   - Show voice interaction in real sauna
   - Apple Watch safety alert
   - n8n workflow visualization
4. **AI-Native Dev** (30s): Show how you used AI tools to build fast
5. **Market Potential** (30s): Business model, US market opportunity

### Live Demo Checklist:
- [ ] Test in actual sauna 30 mins before
- [ ] Have backup video ready
- [ ] Charge all devices
- [ ] Test voice in loud environment
- [ ] Prepare 3 voice commands that always work
- [ ] Show n8n workflows on laptop
- [ ] Apple Watch on presenter's wrist

---

## **Judging Criteria Alignment**

| Criterion | How We Nail It |
|-----------|----------------|
| **AI Utilization (13%)** | Person 5 documents EVERYTHING, show Claude/Cursor/v0 usage live |
| **Creativity (13%)** | Voice-first + biometric monitoring = unique combo |
| **Business Potential (13%)** | Freemium model, subscription for premium voice coaching |
| **Real-World Adoption (13%)** | Works with existing Apple Watches, no special hardware |
| **Originality (13%)** | First voice-guided sauna coach with biometric safety |
| **Finnish Wellness (13%)** | Traditional guided sessions, löyly education |
| **Global Scalability (13%)** | ElevenLabs = 29 languages, US market ready |
| **Functionality (13%)** | Actually works in venue saunas = best demo |

---

## **Key Success Factors**

1. **Integrate early** - Don't wait until Sunday to connect pieces
2. **Use AI tools religiously** - Document EVERYTHING for judges
3. **Test in real sauna** - Your advantage over other teams
4. **Make it beautiful** - First impressions matter
5. **Practice demo** - Smooth presentation = confidence = win
6. **Have fun** - Best projects come from teams enjoying themselves

---
