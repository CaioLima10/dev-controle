
export function Container({children}: {children: React.ReactNode}){
  return(
    <div >
      <div className="w-full max-w-7xl mx-auto">{children}</div>
    </div>
  )
}
