'use client';

import { useState, useEffect } from 'react';

type SessionState = 'idle' | 'active' | 'paused';
type SafetyLevel = 'safe' | 'caution' | 'critical';

export default function Home() {
  const [sessionState, setSessionState] = useState<SessionState>('idle');
  const [sessionTime, setSessionTime] = useState(0);
  const [temperature, setTemperature] = useState(72);
  const [humidity, setHumidity] = useState(38);
  const [conversationActive, setConversationActive] = useState(false);
  const [lastResponse, setLastResponse] = useState<Date | null>(null);
  const [safetyLevel, setSafetyLevel] = useState<SafetyLevel>('safe');

  // Simulate sensor data updates
  useEffect(() => {
    if (sessionState === 'active') {
      const interval = setInterval(() => {
        setSessionTime(prev => prev + 1);
        setTemperature(prev => Math.min(prev + Math.random() * 2, 95));
        setHumidity(prev => Math.min(Math.max(prev + (Math.random() - 0.5) * 3, 30), 70));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [sessionState]);

  // Safety monitoring
  useEffect(() => {
    if (sessionState === 'active') {
      if (sessionTime > 1200 || temperature > 88) {
        setSafetyLevel('critical');
      } else if (sessionTime > 900 || temperature > 82) {
        setSafetyLevel('caution');
      } else {
        setSafetyLevel('safe');
      }
    }
  }, [sessionTime, temperature, sessionState]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const startSession = () => {
    setSessionState('active');
    setSessionTime(0);
    setLastResponse(new Date());
  };

  const endSession = () => {
    setSessionState('idle');
    setSessionTime(0);
    setTemperature(75);
    setHumidity(45);
    setSafetyLevel('safe');
  };

  return (
    <main className="relative min-h-screen bg-background">
      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, rgba(196, 120, 84, 0.03) 0%, transparent 50%),
                           radial-gradient(circle at 80% 70%, rgba(232, 213, 183, 0.02) 0%, transparent 50%)`,
        }} />
        <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] animate-shimmer" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen">
        {/* Header */}
        <header className="border-b border-border">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-serif text-text-primary tracking-tight">Sigma</h1>
                <div className="text-xs text-text-tertiary mt-1 tracking-wider uppercase">Sauna Monitor</div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <div className="text-xs text-text-tertiary uppercase tracking-wider mb-1">Status</div>
                  <div className={`text-sm ${sessionState === 'active' ? 'text-primary' : 'text-text-secondary'}`}>
                    {sessionState === 'active' ? 'Session Active' : 'Standby'}
                  </div>
                </div>
                <div className={`w-2 h-2 rounded-full ${sessionState === 'active' ? 'bg-primary animate-pulse-slow' : 'bg-surface-raised'}`} />
              </div>
            </div>
          </div>
        </header>

        {sessionState === 'idle' ? (
          // Idle State - Start Session
          <div className="max-w-5xl mx-auto px-6">
            <div className="py-24 space-y-16">
              {/* Main CTA */}
              <div className="text-center space-y-8 opacity-0 animate-slideUp">
                <div>
                  <div className="text-xs text-text-tertiary uppercase tracking-[0.2em] mb-6">Ready</div>
                  <h2 className="text-6xl md:text-7xl font-serif text-text-primary mb-6 leading-none">
                    Begin Session
                  </h2>
                  <p className="text-base text-text-secondary max-w-md mx-auto leading-relaxed">
                    Monitored sauna experience with conversational AI guidance and comprehensive safety tracking
                  </p>
                </div>

                <button
                  onClick={startSession}
                  className="inline-block px-10 py-4 bg-primary hover:bg-primary-muted text-background text-sm font-medium tracking-wide uppercase transition-all duration-300 border border-primary hover:border-primary-muted"
                >
                  Start
                </button>
              </div>

              {/* Stats Grid */}
              <div className="grid md:grid-cols-3 gap-px bg-border opacity-0 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                <div className="bg-surface p-8 text-center">
                  <div className="text-xs text-text-tertiary uppercase tracking-wider mb-3">Sessions</div>
                  <div className="text-4xl font-serif text-text-primary">12</div>
                  <div className="text-xs text-text-tertiary mt-2">This Month</div>
                </div>
                <div className="bg-surface p-8 text-center">
                  <div className="text-xs text-text-tertiary uppercase tracking-wider mb-3">Total Time</div>
                  <div className="text-4xl font-serif text-text-primary">4.2h</div>
                  <div className="text-xs text-text-tertiary mt-2">Accumulated</div>
                </div>
                <div className="bg-surface p-8 text-center">
                  <div className="text-xs text-text-tertiary uppercase tracking-wider mb-3">Average</div>
                  <div className="text-4xl font-serif text-text-primary">18m</div>
                  <div className="text-xs text-text-tertiary mt-2">Per Session</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Active Session Dashboard
          <div className="max-w-7xl mx-auto px-6 py-12 space-y-8">
            {/* Safety Alert Banner */}
            {safetyLevel !== 'safe' && (
              <div className={`border-l-2 pl-6 pr-8 py-4 flex items-center justify-between ${
                safetyLevel === 'critical'
                  ? 'border-red-600 bg-red-600/5'
                  : 'border-yellow-600 bg-yellow-600/5'
              }`}>
                <div>
                  <div className="text-sm font-medium text-text-primary mb-1">
                    {safetyLevel === 'critical' ? 'Critical Safety Alert' : 'Caution Advisory'}
                  </div>
                  <div className="text-xs text-text-secondary">
                    {safetyLevel === 'critical'
                      ? 'Session parameters exceed recommended safety thresholds'
                      : 'Approaching recommended session duration limits'}
                  </div>
                </div>
                <button
                  onClick={endSession}
                  className="px-6 py-2 bg-text-primary text-background text-xs uppercase tracking-wider hover:bg-text-secondary transition-all"
                >
                  End Session
                </button>
              </div>
            )}

            {/* Main Sensor Grid */}
            <div className="grid lg:grid-cols-3 gap-px bg-border">
              {/* Temperature */}
              <div className="bg-surface p-10">
                <div className="mb-8">
                  <div className="text-xs text-text-tertiary uppercase tracking-[0.15em] mb-4">Temperature</div>
                  <div className="text-7xl font-serif text-text-primary tabular-nums leading-none">
                    {Math.round(temperature)}°
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-px bg-border-emphasis overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-700 ease-out"
                      style={{ width: `${(temperature / 100) * 100}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] text-text-tertiary uppercase tracking-wider">
                    <span>60°C</span>
                    <span>100°C</span>
                  </div>
                </div>
              </div>

              {/* Time Elapsed */}
              <div className="bg-surface p-10">
                <div className="mb-8">
                  <div className="text-xs text-text-tertiary uppercase tracking-[0.15em] mb-4">Duration</div>
                  <div className="text-7xl font-serif text-text-primary tabular-nums leading-none">
                    {formatTime(sessionTime)}
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-px bg-border-emphasis overflow-hidden">
                    <div
                      className="h-full bg-accent transition-all duration-700 ease-out"
                      style={{ width: `${Math.min((sessionTime / 1200) * 100, 100)}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] text-text-tertiary uppercase tracking-wider">
                    <span>0:00</span>
                    <span>20:00</span>
                  </div>
                </div>
              </div>

              {/* Humidity */}
              <div className="bg-surface p-10">
                <div className="mb-8">
                  <div className="text-xs text-text-tertiary uppercase tracking-[0.15em] mb-4">Humidity</div>
                  <div className="text-7xl font-serif text-text-primary tabular-nums leading-none">
                    {Math.round(humidity)}<span className="text-4xl">%</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-px bg-border-emphasis overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-700 ease-out"
                      style={{ width: `${humidity}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] text-text-tertiary uppercase tracking-wider">
                    <span>0%</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Conversation Panel */}
            <div className="bg-surface border border-border-emphasis">
              <div className="border-b border-border px-10 py-6 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-serif text-text-primary mb-1">Voice Companion</h3>
                  <p className="text-xs text-text-tertiary">ElevenLabs AI Guidance</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-[10px] text-text-tertiary uppercase tracking-wider">
                    {conversationActive ? 'Active' : 'Standby'}
                  </div>
                  <div className={`w-2 h-2 rounded-full ${conversationActive ? 'bg-primary animate-pulse-slow' : 'bg-surface-raised'}`} />
                </div>
              </div>

              <div className="px-10 py-8 space-y-6">
                {/* Conversation Display */}
                <div className="space-y-6 min-h-[180px]">
                  <div className="space-y-2">
                    <div className="text-[10px] text-text-tertiary uppercase tracking-wider">AI</div>
                    <div className="text-sm text-text-secondary leading-relaxed pl-4 border-l border-border-emphasis">
                      Welcome. How are you feeling today?
                    </div>
                    <div className="text-[10px] text-text-tertiary pl-4">Just now</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-[10px] text-text-tertiary uppercase tracking-wider">You</div>
                    <div className="text-sm text-text-primary leading-relaxed pl-4 border-l border-primary">
                      Feeling great, ready to relax
                    </div>
                    <div className="text-[10px] text-text-tertiary pl-4">30s ago</div>
                  </div>
                </div>

                {/* Voice Controls */}
                <div className="flex gap-3 pt-4">
                  <button
                    onClick={() => setConversationActive(!conversationActive)}
                    className={`flex-1 py-3 text-xs uppercase tracking-wider transition-all ${
                      conversationActive
                        ? 'bg-primary text-background'
                        : 'bg-surface-raised text-text-secondary hover:bg-surface-raised/80'
                    }`}
                  >
                    {conversationActive ? 'Pause' : 'Begin Conversation'}
                  </button>
                  <button className="px-6 py-3 bg-surface-raised text-text-secondary text-xs uppercase tracking-wider hover:bg-surface-raised/80 transition-all">
                    Topics
                  </button>
                </div>
              </div>
            </div>

            {/* Session Controls */}
            <div className="flex gap-px bg-border pt-8">
              <button
                onClick={() => setSessionState('paused')}
                className="flex-1 py-5 bg-surface hover:bg-surface-raised text-text-secondary text-xs uppercase tracking-wider transition-all"
              >
                Pause
              </button>
              <button
                onClick={endSession}
                className="flex-1 py-5 bg-primary hover:bg-primary-muted text-background text-xs uppercase tracking-wider transition-all"
              >
                End Session
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

