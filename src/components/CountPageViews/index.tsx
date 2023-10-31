

interface CountPageViewsProps{
  pageViews: string
}

export default function CountPageViews({pageViews}: CountPageViewsProps) {
  return (
    <p className="page-views">
      {pageViews}K PAGEVIEWS
    </p>
  )
}

