import { useState } from 'react';
import { Heart } from 'lucide-react';
import FloatingHearts from './components/FloatingHearts';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';

type ViewState = 'initial' | 'gate' | 'unlocked';

export default function App() {
  const [viewState, setViewState] = useState<ViewState>('initial');
  const [secretName, setSecretName] = useState('');
  const [error, setError] = useState('');
  const [showSurprise, setShowSurprise] = useState(false);

  const handleOpenGift = () => {
    setViewState('gate');
  };

  const handleSubmitSecret = (e: React.FormEvent) => {
    e.preventDefault();
    if (secretName.toLowerCase().trim() === 'minu') {
      setError('');
      setViewState('unlocked');
    } else {
      setError('That\'s not the secret name. Try again! 💕');
    }
  };

  if (viewState === 'initial') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-romantic p-4">
        <FloatingHearts />
        <div className="text-center space-y-8 animate-fade-in z-10">
          <div className="space-y-4">
            <Heart className="w-20 h-20 mx-auto text-romantic-rose animate-pulse-gentle" />
            <h1 className="text-5xl md:text-7xl font-elegant text-romantic-deep">
              A Special Gift
            </h1>
            <p className="text-xl md:text-2xl text-romantic-mauve font-light">
              Something beautiful awaits...
            </p>
          </div>
          <Button
            onClick={handleOpenGift}
            size="lg"
            className="bg-romantic-rose hover:bg-romantic-rose-dark text-white px-12 py-6 text-xl rounded-full shadow-glow transition-all duration-300 hover:scale-105"
          >
            Open Birthday Gift 🎁
          </Button>
        </div>
      </div>
    );
  }

  if (viewState === 'gate') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-romantic p-4">
        <FloatingHearts />
        <div className="w-full max-w-md animate-fade-in z-10">
          <div className="card-glow bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 space-y-6">
            <div className="text-center space-y-3">
              <Heart className="w-16 h-16 mx-auto text-romantic-rose" />
              <h2 className="text-3xl md:text-4xl font-elegant text-romantic-deep">
                One More Thing...
              </h2>
              <p className="text-romantic-mauve font-light">
                Enter the secret name I call you
              </p>
            </div>
            <form onSubmit={handleSubmitSecret} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="secret" className="text-romantic-deep font-medium">
                  Secret Name
                </Label>
                <Input
                  id="secret"
                  type="text"
                  value={secretName}
                  onChange={(e) => {
                    setSecretName(e.target.value);
                    setError('');
                  }}
                  placeholder="Type here..."
                  className="text-lg py-6 rounded-xl border-romantic-lavender focus:border-romantic-rose focus:ring-romantic-rose"
                  autoFocus
                />
                {error && (
                  <p className="text-romantic-rose text-sm animate-shake">{error}</p>
                )}
              </div>
              <Button
                type="submit"
                className="w-full bg-romantic-rose hover:bg-romantic-rose-dark text-white py-6 text-lg rounded-xl shadow-soft transition-all duration-300"
              >
                Unlock Gift 💝
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-romantic p-4 md:p-8 overflow-x-hidden">
      <FloatingHearts />
      <div className="max-w-4xl mx-auto space-y-8 relative z-10">
        {/* Hero Section */}
        <div className="card-glow bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 text-center space-y-6 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-elegant text-romantic-deep leading-tight">
              Happy Birthday Minu ❤️
            </h1>
            <p className="text-2xl md:text-3xl text-romantic-mauve font-light">
              7th February 1979
            </p>
          </div>
        </div>

        {/* Surprise Photo Gallery Section */}
        <div className="card-glow bg-white/95 backdrop-blur-sm rounded-3xl p-6 md:p-8 animate-photo-reveal">
          <h2 className="text-3xl md:text-4xl font-elegant text-romantic-rose text-center mb-6">
            Our Beautiful Moments Together 💕
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="photo-frame animate-photo-slide-left">
              <img
                src="/assets/photo_2026-02-06_14-51-36.jpg"
                alt="Our special moment together"
                className="w-full h-auto rounded-2xl shadow-soft"
              />
            </div>
            <div className="photo-frame animate-photo-slide-right">
              <img
                src="/assets/photo_2026-02-06_14-51-40.jpg"
                alt="Another beautiful memory"
                className="w-full h-auto rounded-2xl shadow-soft"
              />
            </div>
          </div>
          <p className="text-center text-romantic-mauve font-light mt-6 text-lg">
            Every moment with you is a treasure I hold close to my heart
          </p>
        </div>

        {/* Love Message Section */}
        <div className="card-glow bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 space-y-6 animate-fade-in-delay-2">
          <div className="space-y-6 text-romantic-deep leading-relaxed">
            <p className="text-lg md:text-xl font-light">
              My Dearest Minu,
            </p>
            <p className="text-base md:text-lg">
              On this special day, I want you to know how incredibly grateful I am to have you in my life. 
              Every moment with you is a treasure, and every day you fill my heart with joy and warmth that 
              words can barely express.
            </p>
            <p className="text-base md:text-lg">
              Your kindness touches everyone around you, and your strength inspires me every single day. 
              The way you care for others, the compassion you show, and the love you give so freely—these 
              are just a few of the countless reasons I admire you so deeply.
            </p>
            <p className="text-base md:text-lg">
              You are not just my partner; you are my best friend, my confidant, and the love of my life. 
              Through every challenge and every celebration, you have been my rock, my light, and my greatest 
              blessing. I am in awe of the beautiful person you are, inside and out.
            </p>
            <p className="text-base md:text-lg">
              As we celebrate another year of your wonderful life, I want you to know that my love for you 
              grows stronger with each passing day. You make everything better, brighter, and more beautiful. 
              Thank you for being you, for loving me, and for making our life together so extraordinary.
            </p>
            <p className="text-base md:text-lg">
              Here's to you, my love—to your grace, your laughter, your wisdom, and your beautiful heart. 
              May this year bring you all the happiness you deserve and more.
            </p>
            <div className="text-lg md:text-xl font-elegant text-romantic-rose pt-4">
              <p>With all my love,</p>
              <p className="text-2xl md:text-3xl">Kishore ❤️</p>
            </div>
          </div>
        </div>

        {/* Birthday Wishes Section */}
        <div className="card-glow bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 space-y-6 animate-fade-in-delay-3">
          <h2 className="text-3xl md:text-4xl font-elegant text-romantic-deep text-center">
            My Birthday Wishes for You 🌟
          </h2>
          <div className="space-y-4 text-romantic-deep">
            <div className="flex items-start space-x-3">
              <Heart className="w-6 h-6 text-romantic-rose flex-shrink-0 mt-1" />
              <p className="text-base md:text-lg">
                May your days be filled with endless joy, laughter, and all the love your beautiful heart can hold.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <Heart className="w-6 h-6 text-romantic-rose flex-shrink-0 mt-1" />
              <p className="text-base md:text-lg">
                May you continue to shine your light on everyone around you, just as you've always done.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <Heart className="w-6 h-6 text-romantic-rose flex-shrink-0 mt-1" />
              <p className="text-base md:text-lg">
                May all your dreams come true, and may this year bring you countless moments of happiness.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <Heart className="w-6 h-6 text-romantic-rose flex-shrink-0 mt-1" />
              <p className="text-base md:text-lg">
                May you always know how deeply loved and cherished you are, today and every day.
              </p>
            </div>
          </div>
        </div>

        {/* Today's Plans Section */}
        <div className="card-glow bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 space-y-6 animate-fade-in-delay-4">
          <h2 className="text-3xl md:text-4xl font-elegant text-romantic-deep text-center">
            Today's Special Plans 🎉
          </h2>
          <div className="space-y-4 text-romantic-deep">
            <div className="bg-romantic-blush rounded-xl p-4 md:p-6">
              <h3 className="text-xl md:text-2xl font-elegant text-romantic-rose mb-2">Morning</h3>
              <p className="text-base md:text-lg">
                A special breakfast in bed, prepared with love, to start your day with sweetness and warmth.
              </p>
            </div>
            <div className="bg-romantic-blush rounded-xl p-4 md:p-6">
              <h3 className="text-xl md:text-2xl font-elegant text-romantic-rose mb-2">Afternoon</h3>
              <p className="text-base md:text-lg">
                A surprise outing to your favorite place, where we can spend quality time together and create 
                beautiful new memories.
              </p>
            </div>
            <div className="bg-romantic-blush rounded-xl p-4 md:p-6">
              <h3 className="text-xl md:text-2xl font-elegant text-romantic-rose mb-2">Evening</h3>
              <p className="text-base md:text-lg">
                A romantic candlelit dinner with all your favorite dishes, followed by a special dessert to 
                celebrate you.
              </p>
            </div>
            <div className="bg-romantic-blush rounded-xl p-4 md:p-6">
              <h3 className="text-xl md:text-2xl font-elegant text-romantic-rose mb-2">Night</h3>
              <p className="text-base md:text-lg">
                Stargazing together, sharing dreams and wishes, and ending the perfect day wrapped in each 
                other's arms.
              </p>
            </div>
          </div>
        </div>

        {/* Surprise Button Section */}
        <div className="card-glow bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 space-y-6 animate-fade-in-delay-5">
          <div className="text-center">
            <Button
              onClick={() => setShowSurprise(!showSurprise)}
              size="lg"
              className="bg-romantic-rose hover:bg-romantic-rose-dark text-white px-8 py-6 text-lg rounded-full shadow-soft transition-all duration-300 hover:scale-105"
            >
              {showSurprise ? 'Hide Surprise 💝' : 'Click for a Surprise 💝'}
            </Button>
          </div>
          {showSurprise && (
            <div className="mt-6 p-6 md:p-8 bg-romantic-blush rounded-2xl animate-expand space-y-4">
              <h3 className="text-2xl md:text-3xl font-elegant text-romantic-rose text-center">
                A Promise to You 💕
              </h3>
              <p className="text-base md:text-lg text-romantic-deep leading-relaxed">
                My darling Minu, I promise to love you more with each sunrise, to cherish every moment we share, 
                and to stand by your side through all of life's adventures. You are my forever, my always, and 
                my everything. Today, tomorrow, and for all the days to come, I will love you with all my heart. 
                Happy Birthday, my beautiful love. You make my world complete. ❤️
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="text-center py-8 text-romantic-mauve text-sm">
          <p>© 2026. Built with <Heart className="inline w-4 h-4 text-romantic-rose" /> using caffeine.ai</p>
        </footer>
      </div>
    </div>
  );
}
