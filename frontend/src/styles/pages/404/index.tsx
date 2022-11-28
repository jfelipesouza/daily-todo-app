import Link from 'next/link'
import styled, { keyframes } from 'styled-components'

const pathAnim = keyframes`
  0% {
      d: path(
        'M 0,600 C 0,600 0,200 0,200 C 116.16267942583733,221.00478468899522 232.32535885167465,242.00956937799043 311,222 C 389.67464114832535,201.99043062200957 430.8612440191388,140.9665071770335 526,155 C 621.1387559808612,169.0334928229665 770.2296650717701,258.1244019138756 894,272 C 1017.7703349282299,285.8755980861244 1116.2200956937802,224.5358851674641 1203,200 C 1289.7799043062198,175.4641148325359 1364.8899521531098,187.73205741626793 1440,200 C 1440,200 1440,600 1440,600 Z'
      );
    }
    25% {
      d: path(
        'M 0,600 C 0,600 0,200 0,200 C 95.17703349282297,218.16267942583733 190.35406698564594,236.32535885167462 291,224 C 391.64593301435406,211.67464114832538 497.7607655502393,168.86124401913875 609,161 C 720.2392344497607,153.13875598086125 836.6028708133971,180.22966507177034 915,188 C 993.3971291866029,195.77033492822966 1033.8277511961724,184.22009569377988 1115,183 C 1196.1722488038276,181.77990430622012 1318.0861244019138,190.88995215311007 1440,200 C 1440,200 1440,600 1440,600 Z'
      );
    }
    50% {
      d: path(
        'M 0,600 C 0,600 0,200 0,200 C 85.42583732057417,223.3397129186603 170.85167464114835,246.6794258373206 271,245 C 371.14832535885165,243.3205741626794 486.01913875598086,216.622009569378 594,184 C 701.9808612440191,151.377990430622 803.0717703349283,112.83253588516746 887,126 C 970.9282296650717,139.16746411483254 1037.6937799043062,204.04784688995215 1127,225 C 1216.3062200956938,245.95215311004785 1328.153110047847,222.97607655502392 1440,200 C 1440,200 1440,600 1440,600 Z'
      );
    }
    75% {
      d: path(
        'M 0,600 C 0,600 0,200 0,200 C 70.5263157894737,196.72727272727275 141.0526315789474,193.45454545454547 237,181 C 332.9473684210526,168.54545454545453 454.31578947368416,146.9090909090909 559,157 C 663.6842105263158,167.0909090909091 751.6842105263157,208.9090909090909 836,218 C 920.3157894736843,227.0909090909091 1000.9473684210527,203.45454545454544 1101,195 C 1201.0526315789473,186.54545454545456 1320.5263157894738,193.27272727272728 1440,200 C 1440,200 1440,600 1440,600 Z'
      );
    }
    100% {
      d: path(
        'M 0,600 C 0,600 0,200 0,200 C 116.16267942583733,221.00478468899522 232.32535885167465,242.00956937799043 311,222 C 389.67464114832535,201.99043062200957 430.8612440191388,140.9665071770335 526,155 C 621.1387559808612,169.0334928229665 770.2296650717701,258.1244019138756 894,272 C 1017.7703349282299,285.8755980861244 1116.2200956937802,224.5358851674641 1203,200 C 1289.7799043062198,175.4641148325359 1364.8899521531098,187.73205741626793 1440,200 C 1440,200 1440,600 1440,600 Z'
      );
    }
 

`
const pathAnim1 = keyframes`
0% {
      d: path(
        'M 0,600 C 0,600 0,400 0,400 C 75.31100478468898,415.444976076555 150.62200956937795,430.8899521531101 246,411 C 341.37799043062205,391.1100478468899 456.82296650717706,335.8851674641148 550,342 C 643.1770334928229,348.1148325358852 714.0861244019138,415.56937799043067 810,448 C 905.9138755980862,480.43062200956933 1026.8325358851675,477.8373205741627 1136,464 C 1245.1674641148325,450.1626794258373 1342.5837320574162,425.08133971291863 1440,400 C 1440,400 1440,600 1440,600 Z'
      );
    }
    25% {
      d: path(
        'M 0,600 C 0,600 0,400 0,400 C 101.88516746411483,352.9569377990431 203.77033492822966,305.9138755980861 297,329 C 390.22966507177034,352.0861244019139 474.8038277511962,445.30143540669854 561,444 C 647.1961722488038,442.69856459330146 735.0143540669857,346.88038277511964 832,347 C 928.9856459330143,347.11961722488036 1035.1387559808613,443.17703349282294 1138,468 C 1240.8612440191387,492.82296650717706 1340.4306220095693,446.41148325358853 1440,400 C 1440,400 1440,600 1440,600 Z'
      );
    }
    50% {
      d: path(
        'M 0,600 C 0,600 0,400 0,400 C 77.64593301435406,398.1818181818182 155.2918660287081,396.3636363636364 251,393 C 346.7081339712919,389.6363636363636 460.47846889952166,384.7272727272727 550,376 C 639.5215311004783,367.2727272727273 704.7942583732058,354.72727272727275 817,358 C 929.2057416267942,361.27272727272725 1088.3444976076555,380.3636363636363 1200,390 C 1311.6555023923445,399.6363636363637 1375.8277511961724,399.81818181818187 1440,400 C 1440,400 1440,600 1440,600 Z'
      );
    }
    75% {
      d: path(
        'M 0,600 C 0,600 0,400 0,400 C 105.69377990430621,374.3062200956938 211.38755980861242,348.6124401913876 307,371 C 402.6124401913876,393.3875598086124 488.1435406698564,463.8564593301436 574,460 C 659.8564593301436,456.1435406698564 746.0382775119618,377.9617224880383 846,352 C 945.9617224880382,326.0382775119617 1059.7033492822966,352.29665071770336 1161,369 C 1262.2966507177034,385.70334928229664 1351.1483253588517,392.8516746411483 1440,400 C 1440,400 1440,600 1440,600 Z'
      );
    }
    100% {
      d: path(
        'M 0,600 C 0,600 0,400 0,400 C 75.31100478468898,415.444976076555 150.62200956937795,430.8899521531101 246,411 C 341.37799043062205,391.1100478468899 456.82296650717706,335.8851674641148 550,342 C 643.1770334928229,348.1148325358852 714.0861244019138,415.56937799043067 810,448 C 905.9138755980862,480.43062200956933 1026.8325358851675,477.8373205741627 1136,464 C 1245.1674641148325,450.1626794258373 1342.5837320574162,425.08133971291863 1440,400 C 1440,400 1440,600 1440,600 Z'
      );
    }
`

const backgroundAnimation = keyframes`
  0%{background-position:0% 13%}
    50%{background-position:100% 88%}
    100%{background-position:0% 13%}
`
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: linear-gradient(171deg, #b7a4cb, #bd9ae3, #967cb2, #594172);
  background-size: 1000% 1000%;
  -webkit-animation: ${backgroundAnimation} 30s ease infinite;
  -moz-animation: ${backgroundAnimation} 30s ease infinite;
  animation: ${backgroundAnimation} 30s ease infinite;

  .custom-shape-divider-bottom-1669585819 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    z-index: 1;
  }

  .custom-shape-divider-bottom-1669585819 svg {
    position: relative;
    display: block;
    width: calc(100%+1rem);
    height: 290px;
  }

  .path-0 {
    animation: ${pathAnim} 4s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  .path-1 {
    animation: ${pathAnim1} 4s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
`
export const ImageContainer = styled.div`
  width: 80%;
  height: 30vw;
  position: relative;
  margin-bottom: 2rem;
  z-index: 99;

  @media (max-width: 500px) {
    width: 100%;
    height: 50vw;
  }
`
export const Message = styled(Link)`
  padding: 1rem 3rem;
  align-self: flex-start;
  background-color: #fff;
  transform: translateX(2rem);
  border-radius: 1rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  transition-property: all;
  transition-timing-function: linear;
  transition-duration: 300ms;
  margin-bottom: 2rem;
  text-decoration: none;

  :hover {
    transform: translateX(2.5rem) scale(1.1);
  }

  @media (max-width: 500px) {
    transform: translateX(0rem);
    align-self: center;
    :hover {
      transform: scale(1.1);
    }
  }
`