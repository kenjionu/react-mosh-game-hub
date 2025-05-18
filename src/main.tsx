import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from './components/ui/provider.tsx'
import { ColorModeProvider } from './components/ui/color-mode.tsx'
import { Theme } from '@chakra-ui/react'
import { QueryClientProvider, QueryClient} from "@tanstack/react-query";

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Provider>
        <ColorModeProvider>
            <Theme>
                <QueryClientProvider client={queryClient}>
                    <App />
                </QueryClientProvider>
          </Theme>
    </ColorModeProvider>
    </Provider>
  </StrictMode>,
)
