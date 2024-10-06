window.onload = function () {
  function dRedirect(url) {
    setTimeout(function () {
      window.location.href = url;
    }, 3000);
  }
const alien2 = document.getElementById('alien-image');
alien2.style.transform=`translate(-1300px, 400px)`;

  document.body.addEventListener('click', function (event) {
    const svgElement = document.getElementById('mySVG');
    const svgin = svgElement.contains(event.target);
    const pather = event.target.tagName === 'path';
    
    if (svgin && !pather) {
      dRedirect('Oceania.html');
    }
  });

  document.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const href2 = this.getAttribute('xlink:href');
      dRedirect(href2);
    });
  });

  document.body.addEventListener('click', function (event) {
    const alien = document.getElementById('alien-image');
    alien.src='aliendance.gif';
    const rect = this.getBoundingClientRect();
    const x = event.clientX - rect.right;
    const y = event.clientY - rect.top;
    alien.style.transform = `translate(${x}px, ${y}px)`;
    
  });
};

const info = {
  'Oceania2':'In Oceania, private car use dominates transportation, contributing to rising carbon dioxide emissions. In 2021, 87% of commutes in Australia involved private vehicles, with only 5% using walking or cycling, and 7% using public transport. Small-island nations like Fiji and Micronesia saw significant growth in motorization, with over 40% increases from 2010-2019. Australia and New Zealand had the highest motorization levels in 2020. Despite this, Oceania remains the lowest emitter of transport CO₂ globally, contributing less than 2% of global emissions. However, Australia is the largest CO₂ emitter in the region and ranked 17th globally in 2021.Oceans, a massive carbon reservoir, have absorbed 40% of CO₂ from fossil fuels since the industrial era. However, tracking oceanic carbon uptake remains complex, requiring advanced models like ECCO-Darwin and data from NASA\'s OCO-2 and OCO-3 satellites to improve accuracy in understanding and mitigating emissions.',
  'Palearctic2':'During the Pleistocene Epoch, the Palearctic region saw repeated glaciations, with CO₂ levels fluctuating between 180-200 ppm during glacial periods and 280-300 ppm during interglacial phases, contributing to warmer climates. In the Holocene Epoch, CO₂ levels increased from 260 ppm to 280-300 ppm, stabilizing the climate and fostering human civilization. The Industrial Era brought a sharp rise in CO₂ levels, surpassing 400 ppm due to fossil fuel use, deforestation, and industrialization, leading to significant climate shifts in the Palearctic, including warmer temperatures and extreme weather. Currently, CO₂ levels could exceed 500 ppm by 2100, further exacerbating warming. Climate change impacts include melting glaciers, threatening water supplies and ecosystems, rising sea levels causing coastal risks, and Arctic habitat loss, which endangers species like polar bears and walruses. This threatens biodiversity and the stability of ecosystems across the region.',
  'Nearctic2': 'Energy is responsible for the majority of climate change-causing greenhouse gas emissions, mostly from the burning of fossil fuels. Despite efforts to reduce these emissions, the trajectory of CO2 emissions globally remains far higher than what is needed to avoid the worst effects of climate change. Higher temperatures and a changing rainfall regime are affecting water supply, water demand and water quality in Canada, Mexico and the United States. The coasts of the USA face extremes of temperatures, rising sea levels and intense hurricanes, while the Midwest is facing an increase in droughts, temperature and increased precipitation. Greenland faces an average loss of 271 billion metric tons of ice per year since 2002, particularly on its western coast.',
  'Neotropic2': 'The Amazon rainforest removes more carbon dioxide from the atmosphere than it emits, reducing global warming. The Amazon\'s carbon balance is a matter of life and death: living trees take carbon dioxide out of the air as they grow, and dead trees put the greenhouse gas back into the air as they decompose. However, recent research indicates that the carbon sink capacity of the Amazon is weakening due to climate change, deforestation, and degradation. A study published in 2022 suggested that parts of the Amazon may have transitioned from being a carbon sink to a carbon source, particularly in areas experiencing severe deforestation.',
  'Afrotropic2': 'Africa is responsible for less than 10 percent of GHG emissions. But it is the continent which faces the worst of the negative impacts of climate change. Heatwaves, heavy rains, floods, tropical cyclones, and prolonged droughts have devastating impacts on communities and economies, increasing numbers of people at risk.The global average surface temperatures in 2020 were the highest on record, tied with 2016. This significant increase in temperatures in Africa may exacerbate droughts, affect water resources, and threaten agricultural production. The 2022 heatwaves contributed to severe conditions, with Uganda\'s drought-induced famine causing 2,465 deaths, marking it as one of the deadliest events that year. These disasters highlight the urgent need for climate resilience strategies in African nations. Sea-level increase reached 5 mm per year in several oceanic areas surrounding the continent, which is more than the average global sea-level rise of 3-4 mm per year.',
  'Australasia2':'Climate change poses a significant challenge to Australasia, particularly Australia, which has been experiencing marked changes in temperature, rainfall patterns, and extreme weather events. The warmest year recorded was 2019, with temperatures 1.52°C above average. Carbon levels have exceeded 400 ppm in the Modern Era, causing frequent droughts, heatwaves, and shifts in rainfall patterns across Australasia. If emissions continue, CO₂ could reach 500 ppm, worsening climate challenges such as biodiversity loss, extreme weather, and water scarcity. Intensity of heavy rainfall events has increased by over 10% since 1979, leading to more severe flooding risks. The duration and intensity of heatwaves have risen significantly since 1970, with hot weather records occurring three times more often than cold records in recent years.',
  'Indo-Malay2':'In November, the water level at the Blue Dragon rose to 1.6 meters (5.25 feet) due to typhoon-driven rains. Vietnam, Myanmar, the Philippines, and Thailand are among the 10 countries most affected by climate change in the past 20 years, according to the Global Climate Risk Index. Typhoons and floods in Vietnam and Southeast Asia are becoming more intense and frequent due to climate change. Unchecked, climate change could shave 11 percent off the region\'s GDP by the end of the century as it takes a toll on key sectors such as agriculture, tourism, and fishing.'
};

const sum = document.getElementById('Summary');

document.querySelectorAll('path').forEach(function(path) {
  path.addEventListener('mouseenter', function(event) {
      const pathId = this.getAttribute('class');
      sum.innerHTML = info[pathId] || 'Info to be displayed';
      sum.style.display = 'block';
  });

  path.addEventListener('mouseleave', function(event) {
      sum.innerHTML=info['Oceania2'];
  });
});
