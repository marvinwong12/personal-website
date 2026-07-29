import { createContext, useContext, useMemo, useState } from 'react'

const ResumeModalContext = createContext(null)

export function ResumeModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  const value = useMemo(
    () => ({
      isOpen,
      openResume: () => setIsOpen(true),
      closeResume: () => setIsOpen(false),
    }),
    [isOpen],
  )

  return (
    <ResumeModalContext.Provider value={value}>
      {children}
    </ResumeModalContext.Provider>
  )
}

export function useResumeModal() {
  const ctx = useContext(ResumeModalContext)
  if (!ctx) {
    throw new Error('useResumeModal must be used within a ResumeModalProvider')
  }
  return ctx
}
