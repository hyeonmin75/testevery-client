import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Test from "@/pages/Test";
import Result from "@/pages/Result";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import About from "@/pages/About";
import Guide from "@/pages/Guide";
import FAQ from "@/pages/FAQ";
import Psychology from "@/pages/Psychology";
import Blog from "@/pages/Blog";
import BlogPostPage from "@/pages/BlogPost";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";
import MBTITheory from "@/pages/MBTITheory";
import PsychologyEducation from "@/pages/PsychologyEducation";
import CognitivePsychology from "@/pages/CognitivePsychology";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/test/:testId" component={Test} />
      <Route path="/result/:testId" component={Result} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route path="/about" component={About} />
      <Route path="/guide" component={Guide} />
      <Route path="/faq" component={FAQ} />
      <Route path="/psychology" component={Psychology} />
      <Route path="/psychology/mbti-theory" component={MBTITheory} />
      <Route path="/psychology/education" component={PsychologyEducation} />
      <Route path="/psychology/cognitive-psychology" component={CognitivePsychology} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:id" component={BlogPostPage} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
