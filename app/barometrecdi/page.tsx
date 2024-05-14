import CDI from '@/components/BarometreForms/cdi'
import TitleHeroSection from '@/components/heroSection/TitleHeroSection'
import Footer from '@/components/navigation/Footer'
import Navbar from '@/components/navigation/Navbar'
import React from 'react'

const BarometreCdi = () => {
  return (
    <div>
      <Navbar/>
      <TitleHeroSection
      title='Contribuez anonymement au baromètre'
      description="Chaque jour, nos experts IT nous apportent des précisions sur les missions et projets qu'ils ont réalisées ou sur les modalités de leur dernier emploi . Cette base déjà très riche permet aux futurs indépendants et salariés d'évaluer objectivement leur future rémunération. Contribution 100 % anonyme. Afin d'éviter les abus et garantir la qualité de cette base, toutes les contributions sont vérifiées avant d'être mises en ligne."/>
      <CDI/>
      <Footer/>
    </div>
  )
}

export default BarometreCdi
