import { useState } from 'react'

const usePagination = ({
  nPages,
  startPage,
}: {
  nPages: number
  startPage?: number
}) => {
  const [currentPage, setCurrentPage] = useState(
    // Check if startPage is undefined or overflowed to start from 0
    typeof startPage !== 'undefined' && startPage >= 0 && startPage <= nPages
      ? startPage
      : 0
  )

  const nextPage = () => {
    const nextPage = currentPage + 1
    if (nextPage < nPages) {
      setCurrentPage(nextPage)
    }
  }

  const previousPage = () => {
    const prevPage = currentPage - 1
    if (prevPage >= 0) {
      setCurrentPage(prevPage)
    }
  }

  const setPage = (page: number) => {
    if (page >= 0 && page < nPages) {
      setCurrentPage(page)
    }
  }

  return {
    nPages,
    currentPage,
    previousPage,
    nextPage,
    setPage,
  }
}

export default usePagination
