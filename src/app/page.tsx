import Featured from '@/components/Featured'
import Offer from '@/components/Offer'
import Slider from '@/components/Slider'
import AnimatedPizza from '@/components/AnimatedPizza'
import AnimatedDelivery from '@/components/AnimatedDelivery'


export default function Home() {
  return (
    <main>
      <Slider/>
      <Featured/>
      <Offer/>
      <AnimatedPizza/>
      <AnimatedDelivery/>
    </main>
  )
}
