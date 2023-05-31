import { useState, useEffect } from 'react'

export const useGetAdvice = () => {
  const [advice, setAdvice] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchAdvice = async () => {
      const URL_API = 'https://api.adviceslip.com/advice'
      setLoading(true)
      try {
        const response = await fetch(URL_API)
        const data = await response.json()
        const { slip } = data
        setAdvice(slip)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    fetchAdvice()
  }, [])

  return { advice, loading, error }
}
