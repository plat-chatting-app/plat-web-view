import Button from '@plat/Button'
import Paper from '@plat/Paper'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Paper>
        <Button size="lg">Click me</Button>
      </Paper>
    </main>
  )
}
