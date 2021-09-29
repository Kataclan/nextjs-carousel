import { renderHook, act } from '@testing-library/react-hooks'
import { usePagination } from '../../hooks'

describe('usePagination hook', () => {
  const PAGES = 3
  test('hooks creates correctly with default values', () => {
    const { result } = renderHook(() => usePagination({ nPages: PAGES }))

    expect(result.current.nPages).toBe(PAGES)
    expect(result.current.currentPage).toBe(0)
  })

  test('hooks creates correctly with custom start page', () => {
    const { result } = renderHook(() =>
      usePagination({ nPages: PAGES, startPage: 2 })
    )

    expect(result.current.nPages).toBe(PAGES)
    expect(result.current.currentPage).toBe(2)
  })

  test('hooks creates correctly with overflowed start page', () => {
    const { result } = renderHook(() =>
      usePagination({ nPages: PAGES, startPage: 25 })
    )

    expect(result.current.nPages).toBe(PAGES)
    expect(result.current.currentPage).toBe(0)
  })

  test('calling nextPage should increment currentPage', () => {
    const { result } = renderHook(() => usePagination({ nPages: 3 }))

    act(() => {
      result.current.nextPage()
    })

    expect(result.current.currentPage).toBe(1)
  })
  test('calling previousPage should decrement currentPage', () => {
    const { result } = renderHook(() =>
      usePagination({ nPages: 3, startPage: 2 })
    )

    act(() => {
      result.current.previousPage()
    })

    expect(result.current.currentPage).toBe(1)
  })

  test("calling previousPage don't decrement currentPage if currentPage == 0", () => {
    const { result } = renderHook(() => usePagination({ nPages: 3 }))

    act(() => {
      result.current.previousPage()
    })

    expect(result.current.currentPage).toBe(0)
  })

  test("calling nextPage don't increment currentPage if currentPage == nPages - 1", () => {
    const { result } = renderHook(() =>
      usePagination({ nPages: 3, startPage: 2 })
    )

    act(() => {
      result.current.nextPage()
    })

    expect(result.current.currentPage).toBe(2)
  })
})
