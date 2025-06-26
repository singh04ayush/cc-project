import { Navigation } from './components/Navigation';
import { AuthForm } from './components/Auth';
import { Card } from './components/UI';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-blue-100 to-white relative overflow-hidden">
      {/* Background blur effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-300/20 via-purple-200/10 to-transparent"></div>
      
      {/* Navigation Header */}
      <Navigation />

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-end px-8 h-[calc(100vh-120px)]">
        <div className="w-full max-w-sm mr-16">
          {/* Sign In Form */}
          <Card>
            <AuthForm />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;