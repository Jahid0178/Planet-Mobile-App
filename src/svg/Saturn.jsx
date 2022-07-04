import * as React from "react";
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  RadialGradient,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const SvgComponent = (props) => (
  <Svg
    width={90}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#a)">
      <Path
        d="M84 19.714c0-.75-1.009-1.493-2.969-2.186-1.96-.694-4.832-1.324-8.454-1.854-3.621-.53-7.92-.952-12.652-1.239A248.968 248.968 0 0 0 45 14c-5.122 0-10.193.148-14.925.435-4.731.287-9.03.708-12.652 1.239-3.622.53-6.494 1.16-8.454 1.854C7.009 18.22 6 18.963 6 19.713"
        stroke="url(#b)"
        strokeWidth={3.584}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M64.383 19.747c0 1.925-.244 3.766-.732 5.481-.976 3.515-2.847 6.61-5.41 9.037a19.26 19.26 0 0 1-6.304 4.017 18.584 18.584 0 0 1-6.833 1.297c-.325 0-.691 0-1.017-.042-.488-.042-1.016-.084-1.504-.126a18.798 18.798 0 0 1-9.843-4.476 21.3 21.3 0 0 1-2.807-2.97 18.617 18.617 0 0 1-1.667-2.595c-.122-.209-.244-.46-.366-.67-.122-.25-.244-.46-.326-.71a22.865 22.865 0 0 1-.854-2.343c-.163-.586-.325-1.172-.447-1.757-.082-.419-.163-.837-.204-1.297-.122-.921-.203-1.841-.203-2.804 0-.544 0-1.087.081-1.631.04-.335.04-.67.122-1.005a19.112 19.112 0 0 1 1.546-5.522c.366-.837.813-1.674 1.301-2.427.814-1.297 1.75-2.51 2.848-3.598C35.22 2.134 39.98 0 45.186 0h.61c.203 0 .447 0 .65.042 1.099.084 2.197.25 3.214.502.61.167 1.22.335 1.79.544.406.125.772.293 1.179.46l.854.377c.04.041.081.041.163.083 1.87.92 3.579 2.176 5.043 3.682l.61.628c.122.167.285.292.407.46.244.25.447.544.65.795.774 1.004 1.424 2.092 1.994 3.221a21.792 21.792 0 0 1 1.545 4.226c.285 1.506.488 3.096.488 4.727Z"
      fill="url(#c)"
    />
    <Path
      opacity={0.5}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M53.564 1.925c-.081 0-.122 0-.203.041-.203.042-.407 0-.61-.041-.163-.042-.244-.126-.447-.126-.245-.042-.448-.125-.692-.167-.244-.042-.447-.126-.691-.21-.204-.083-.285-.041-.448 0-.163.042-.285-.041-.447-.083-.163-.084-.366-.084-.529-.126-.488-.083-.976-.25-1.464-.376-.285-.084-.57-.084-.895-.084-.244 0-.447.084-.691.084-.163 0-.285-.042-.448-.042-.163-.042-.325 0-.488 0-.244-.042-.366-.084-.61 0-.203.042-.325.042-.529.084-.203 0-.447.083-.65.125-.367.084-.773.167-1.14.167-.243 0-.569-.083-.772 0-.122.042-.204.21-.326.293-.203.21-.406.377-.569.586-.163.21-.325.46-.325.753 0 .251.122.544.244.753.122.251.162.46-.082.628-.284.209-.65.376-.976.502-.244.084-.447.125-.61-.042-.081-.042-.122-.167-.203-.251-.082-.042-.204 0-.285.042-.244.084-.488.167-.732.209-.163.042-.285.126-.448.126-.162.041-.284-.084-.488-.042-.244.042-.528.167-.772.167-.204 0-.448-.084-.61-.167-.082-.042-.123-.126-.245-.084-.08 0-.203.126-.244.21-.081.083-.081.208-.162.292-.082.126-.122.21-.204.335l-.366.627c-.081.126-.162.335-.284.46-.041.084-.163.126-.244.168-.204.125-.407.293-.61.418-.367.293-.733.628-1.099.92-.285.21-.691.335-1.017.503l-.61.25c-.081.043-.203.043-.244.126a.679.679 0 0 0-.162.293c-.163.21-.367.46-.489.711-.08.168-.122.293-.203.46-.081.21-.203.42-.244.67-.163.46-.163.962-.366 1.423-.081.25-.244.502-.366.753-.203.418-.244.92-.285 1.38-.04.251 0 .586.04.837.042.293.042.586.042.879 0 .292-.204.627-.366.836-.163.21-.448.293-.651.503-.163.167-.366.334-.448.585-.04.084 0 .21 0 .335-.04.25-.122.46-.122.711-.04.293-.04.586-.04.92v.46c0 .168.04.294.081.42v.292c0 .126.081.251.081.335.082.293.122.544.163.837.04.25.163.502.204.753.122.334.162.669.244 1.046.04.25.04.543.08.794.041.21.082.419.082.628 0 .335-.081.628-.081.962 0 .544.203 1.088.325 1.632.04.167.082.293.122.46-1.342-2.677-2.074-5.732-2.074-8.953 0-3.933 1.098-7.573 3.01-10.627.813-1.297 1.749-2.51 2.847-3.556C35.18 2.259 39.939.126 45.145.126c.407 0 .854 0 1.26.041 2.523-.041 4.963.67 7.16 1.758Z"
      fill="url(#d)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M34.082 19.287c6.223 1.004 5.857 2.72 13.097.67 7.24-2.05 12.446-13.221 12.446-13.221s.366-.837.04-1.339c-.122-.21-1.057.21-1.057.21.163 3.597-4.718 11.044-10.25 13.178-.61.21-1.18.293-1.749.419-.244-.126-.895-.753 2.115-2.845 3.58-2.469 5.166-3.39 4.84-5.983-.325-2.594 2.847-6.652 2.847-6.652s.245-1.088-.366-1.758c-.772-.878-2.48 0-2.48 0s-.448 5.063-6.671 7.782c-6.223 2.72-9.72 1.38-12.08.628-2.4-.753-3.091-4.812-3.091-4.812s-2.034-.418-2.766.879c-.529.962.244 2.176.244 2.176s3.783 1.422 7.159 2.76c3.376 1.34 9.883.126 12.16-1.003 2.32-1.13 2.32-2.97 4.15-4.644.772-.67 1.545-1.172 2.196-1.465 0 0-2.034 3.222-1.79 5.481.244 2.26-1.139 2.176-4.555 6.15-2.4 2.762-4.474 3.682-5.491 3.933-2.603.251-5.003-.042-8.216-.962-5.247-1.465-8.379-3.807-8.379-3.807s-.447-.21-.61.293c-.081.209.407.836.407.836s1.627 2.05 7.85 3.096Z"
      fill="url(#e)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M38.475 38.282s-1.546-1.004-2.685-4.059c-1.139-3.054-1.017-2.845-3.172-4.77-2.156-1.924-5.898-3.806-5.898-3.806s-.244.083-.244.167c0 .377.448.46.448.46s3.497 1.548 5.694 4.017c2.196 2.468 4.555 6.903 2.888 6.652 0 0 .366 1.088 1.26 1.339.855.25 1.709 0 1.709 0Z"
      fill="url(#f)"
    />
    <Path
      d="M53.808 23.513c.733-.795 1.587-1.841 5.085-1.883 3.498-.042 5.287.753 5.287.753s.732-.209.814-1.171c.08-.962-.651-1.423-.651-1.423-.04.293-.407 2.301-3.376 1.13 0-.042 1.057-1.004 1.26-3.012.245-2.009.936-4.895.936-4.895s.407-.712.163-1.297c-.081-.21-.773-.293-.773-.293.61 4.058-.895 8.911-2.522 9.497-1.952.042-4.352.377-5.45 1.13-1.342.92-2.684 5.02-3.538 7.907-.204.711-.651 1.506-1.22 2.26-2.156.543-1.465-2.135-2.4-2.93-.936-.794-2.685-.376-3.864-.794-1.14-.46-1.464-1.381-2.685-1.548-1.22-.168-3.172 2.217-5.41 1.255-2.236-.963-9.639-10-9.639-10s-.65-.167-.813.293c-.122.377.732 1.34.732 1.34s5.165 7.99 10.087 9.036c4.921 1.046 9.395.084 10.941 1.423 1.546 1.38 1.668 3.556 1.668 3.598-1.587 1.757-3.498 3.263-4.393 3.723-1.546.795-4.067 1.34-4.067 1.34.366.418 1.057.752 1.79.961 1.097.293 1.789-.25 1.789-.25s-.61-.544.203-1.256c2.075-1.799 3.58-2.552 5.735-3.096 1.302-.334 1.708.293 1.871.084 2.034.67 3.62-.879 5.328-2.343 1.709-1.422 3.946-1.632 3.946-1.632s1.138-.209 1.464-.711c.285-.46-.366-1.004-.366-1.004s-.976.418-2.847 1.38c-1.83.963-3.824 3.766-6.101 3.682-1.261-.042-.977-1.339-1.099-1.548v-.293c-.04-.92-.244-1.799-.244-2.468 0-.167 0-.335.041-.502.325-1.046 1.586-5.69 2.318-6.443Zm-3.945 8.66a23.672 23.672 0 0 1-1.342 1.632l1.342-1.632Zm1.75 1.423c.04.209.08.418.04.67 0 .125-.04.209-.122.25-.082.042-.122.042-.204.042-.081.042-.203.042-.284.084-.163.042-.326 0-.448 0h-.488c-.081 0-.163-.042-.244-.042-.081 0-.203 0-.244-.042-.163-.084-.285-.293-.407-.335 0-.167 0-.292.082-.418 0-.042.04-.084.04-.167.041-.084.041-.168.082-.251.081-.21.162-.419.325-.586.04-.084.122-.21.163-.293.081-.125.162-.21.244-.293.122-.125.244-.25.407-.335.122-.083.325-.167.488-.125.162.042.203.251.244.377.04.083.04.209.081.292l.122.377c.04.167.04.293.081.46 0 .084 0 .21.041.335Z"
      fill="url(#g)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M29.649 5.983s.854 1.84 3.09 3.514c0 0-.731-2.677-1.26-3.765 0 0-.732-.711-1.83.25ZM41.403 11.63s1.505-.627 1.993-.376c0-.041-1.464.377-1.993.377ZM46.487 10.167c.285-.084.57-.168.814-.293.244-.084.447-.21.691-.335.285-.167.57-.335.814-.544.081-.042.122-.084.203-.125.081-.042.163-.126.244-.168.081-.042.122-.125.203-.167.082-.042.123-.126.204-.167.122-.084.244-.21.325-.293l.163-.168c.04-.041.081-.041.122-.041 0 .041-.04.125-.04.167-.041.084-.082.125-.123.21-.081.166-.244.25-.366.417-.081.084-.162.168-.285.251-.122.084-.284.168-.447.252-.163.083-.325.125-.447.209a1.879 1.879 0 0 1-.407.209c-.081.042-.203.125-.285.167l-.244.126c-.122.083-.244.125-.366.209-.081.042-.122.042-.203.084-.122.083-.326.125-.488.125h-.163c-.04 0-.081-.042-.081-.042.081-.041.122-.083.162-.083ZM50.555 7.447a.718.718 0 0 0-.204.168c0 .041-.04.083.041.083s.122-.042.203-.125c.041-.042.082-.126.041-.168-.04-.042-.122 0-.163.042h.082ZM53.85 2.05c-.041.084-.123.167-.163.251-.041.084-.041.126-.082.21-.04.125-.081.292-.122.418-.081.25-.122.544-.244.795a1.27 1.27 0 0 1-.163.334.32.32 0 0 0-.081.168c-.04.041-.04.083-.081.167-.041.042-.041.084-.082.126-.04.041-.04.125-.081.167-.04.042-.122.167-.081.209.04 0 .04-.042.081-.042.04-.042.122-.083.163-.167.122-.084.203-.21.284-.335a.576.576 0 0 0 .122-.167c.041-.084.122-.126.163-.21.082-.125.204-.25.285-.334.04-.042.081-.126.122-.167.04-.042.081-.084.122-.168.163-.167.285-.335.447-.502.122-.125.204-.293.326-.418a1.71 1.71 0 0 0 .203-.377.449.449 0 0 0 .081-.209.223.223 0 0 0-.203-.125H54.5c-.122.041-.203.083-.325.125-.082.042-.163.126-.285.167-.04.084-.122.126-.04.084ZM54.825 4.435l-.122.25c-.04.043-.081.126-.122.168-.081.126-.122.251-.203.335-.122.21-.285.418-.366.628l-.122.25a.792.792 0 0 0-.082.293c-.04.084-.04.168-.081.293 0 .084-.04.168-.04.251.08-.083.121-.209.203-.293.04-.083.081-.167.162-.209.082-.042.122-.125.163-.209.04-.084.122-.125.163-.21.04-.083.081-.125.122-.208.04-.042.081-.126.122-.21l.122-.25c.04-.168.122-.335.163-.503 0-.083.04-.167 0-.25 0-.042-.082-.21-.082-.126ZM53.483 7.154c-.04.126-.081.21-.081.335v.084c.04 0 .081 0 .081-.042.04 0 .04-.042.04-.084.041-.042.082-.125.041-.209 0-.084-.08-.125-.122-.042l.041-.042ZM51.49 12.886c-.203.21-.488.419-.65.67 0 .041-.123.125-.082.167.04.042.122 0 .163 0 .122-.042.244-.126.366-.167.081-.042.162-.126.244-.168.203-.125.366-.293.529-.502.08-.083.121-.167.162-.25 0-.043.04-.126.04-.126-.04-.126-.284 0-.325.041-.04.042-.121.084-.162.126-.04.042-.081.084-.122.084-.04.042-.081.083-.163.125 0 .042-.04.084 0 0ZM50.514 13.932c-.081.042-.163.084-.204.126 0 .041-.08.083-.04.125.04.042.122 0 .122 0 .04 0 .081-.042.122-.084v-.167ZM45.511 18.827c-.163.126-.366.251-.57.377-.243.125-.487.209-.69.334-.367.21-.733.377-1.099.544-.04.042-.61.251-.407.377.082.042.204.042.285.042.081 0 .163.041.244.041h.244c.448 0 .936-.125 1.342-.292.082-.042.204-.084.285-.126a.563.563 0 0 1 .163-.125.75.75 0 0 0 .203-.293c.081-.168.122-.293.122-.502 0-.084-.04-.126-.081-.21 0-.041-.04-.083-.04-.167ZM42.339 20.25c-.082-.042-.204-.126-.326-.126h-.122a.737.737 0 0 0-.284.084c-.082.083.122.167.203.209a.438.438 0 0 0 .325 0c.082 0 .204-.084.204-.167h.04-.04ZM48.236 18.953a5.91 5.91 0 0 0 1.18-.502c.162-.084.284-.168.447-.252.081-.041.203-.125.285-.167.04 0 .285-.167.325-.084.04.084-.203.252-.244.293-.081.084-.203.168-.325.251-.082.084-.204.084-.285.168-.122.083-.244.125-.407.209-.081.042-.203.084-.284.125-.082.042-.163.042-.244.084h-.163c-.081-.042-.244 0-.285-.125ZM57.306 21.254c.204 0 .448.041.651 0 .163-.042.285-.042.447-.084.285-.042.61-.126.895-.126h.57c.04 0 .122.042.122.084.081.084 0 .084-.041.084-.122.042-.203.125-.325.125-.204.042-.367.084-.57.126h-.407c-.162.042-.325.042-.528.042h-.448c-.122 0-.203-.042-.325-.042-.081 0-.163 0-.203-.042.04.042-.041-.042.162-.167ZM62.187 21.463a1.7 1.7 0 0 0 .651 0c.163-.042.325-.042.447-.084.204-.042.448-.125.651-.25.122-.085.325-.21.448-.168.122.042.244.167.244.293 0 .167-.163.25-.244.334-.163.126-.448.21-.651.21-.244 0-.529-.042-.773-.084-.081 0-.163-.042-.244-.042-.081-.042-.244-.042-.529-.21ZM62.757 11.673c0 .167-.122.627.08.753.123.084.164-.126.164-.21.04-.125-.041-.46-.244-.543ZM26.435 15.773c.204.25.326.502.57.628.163.083.285.209.447.25.163.042.366.084.529.084.081 0 .122 0 .122-.125a.32.32 0 0 0-.081-.168c-.041-.083-.122-.125-.204-.209-.081-.084-.122-.167-.203-.25a2.639 2.639 0 0 0-.936-.545c-.122-.042-.122-.042-.244 0-.081.042-.081.042-.122.126 0 .125.082.25.163.376l-.04-.167ZM26.598 19.664c.285.502.65.92 1.017 1.38.244.293.407.712.691 1.005.041.041.57.502.57.25 0-.041-.163-.292-.163-.334-.081-.125-.163-.293-.285-.418-.081-.126-.203-.21-.244-.335-.081-.126-.162-.21-.244-.335-.122-.125-.203-.334-.284-.46-.082-.126-.204-.293-.285-.418-.122-.21-.285-.419-.488-.502-.04-.042-.122-.084-.204-.042-.203.125-.122.376-.08.209ZM45.145 28.994c.447-.084.773-.168 1.22-.042.204.042.407.125.61.167.122.042.326.084.407.168.081.125.081.293-.04.376-.123.126-.407.084-.57.084a7.326 7.326 0 0 1-.935-.168c-.163-.041-.407-.125-.57-.25-.04-.042-.203-.21-.122-.335ZM51.043 31.337c-.204-.042-.244-.46-.163-.628.04-.084.081-.251.203-.293.082-.042.122.042.204.042-.082.21-.204.377-.326.544l.082.335ZM59.137 31.211c.284-.21.488-.335.813-.418l.488-.126c.204-.042.366-.167.57-.167.081 0 .122 0 .203-.042.081 0 .04-.042.122 0 .163.084.081.21 0 .293a1.192 1.192 0 0 1-.61.293c-.163.042-.244.125-.407.167-.081.042-.163.042-.244.084-.366.083-.732 0-.935-.084ZM33.268 30.5c.163.376.326.753.57 1.088.122.167.203.293.366.376.122.042.244.084.244-.125 0-.084-.081-.251-.122-.335-.163-.293-.366-.502-.529-.753-.081-.084-.163-.251-.244-.293-.122-.042-.325-.125-.285.042ZM40.793 38.951c.447-.084.814-.251 1.22-.377.163-.083.326-.083.529-.083l.04-.042h.163c.041 0 .244-.042.285 0 .163.126-.163.46-.244.502a1.48 1.48 0 0 1-1.18.418c-.203-.041-.406-.125-.61-.167-.122 0-.406-.084-.406-.25.04.04.04 0 .203 0ZM48.277 34.474c-.366.252-.813.503-1.098.921-.204.293.163.21.325.167.122-.041.244-.083.326-.167.08-.084.162-.126.244-.251a.716.716 0 0 1 .203-.167c.04-.084.081-.21.163-.251 0-.042-.041-.042-.041-.084l-.122-.168ZM37.783 28.408c.285-.126.57-.21.814-.377.244-.125.488-.292.732-.418.325-.167.65-.377 1.017-.418.122 0 .244-.084.366 0a.517.517 0 0 1 .244.167c.203.293-.204.544-.407.67-.163.125-.285.25-.488.334-.203.084-.407.126-.61.21-.326.125-.692.292-1.058.334-.203.042-.366-.042-.528-.167a.498.498 0 0 1-.204-.21c-.04-.041-.081-.125.122-.125Z"
      fill="#FFFF0E"
    />
    <G filter="url(#h)">
      <Path
        d="M6 19.429c0 .863 1.009 1.717 2.969 2.514 1.96.798 4.832 1.522 8.454 2.132 3.621.61 7.92 1.095 12.652 1.425 4.732.33 9.804.5 14.925.5 5.122 0 10.193-.17 14.925-.5 4.731-.33 9.03-.814 12.652-1.425 3.622-.61 6.494-1.334 8.454-2.132 1.96-.797 2.97-1.652 2.97-2.514"
        stroke="url(#i)"
        strokeWidth={3.584}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={45}
        y1={14}
        x2={45}
        y2={19.714}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#A09277" />
        <Stop offset={1} />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={25.838}
        y1={14.314}
        x2={53.557}
        y2={14.314}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.011} stopColor="#D7CAB7" />
        <Stop offset={0.298} stopColor="#E1DAC0" />
        <Stop offset={0.695} stopColor="#EDE0CE" />
        <Stop offset={0.866} stopColor="#C3B6A2" />
        <Stop offset={1} stopColor="#9A968B" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={25.75}
        y1={11.218}
        x2={59.793}
        y2={11.218}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.006} stopColor="#FFB80B" />
        <Stop offset={0.388} stopColor="#FFB60C" />
        <Stop offset={0.579} stopColor="#FEAE10" />
        <Stop offset={0.727} stopColor="#FCA117" />
        <Stop offset={0.854} stopColor="#FA8E21" />
        <Stop offset={0.966} stopColor="#F7762E" />
        <Stop offset={1} stopColor="#F66D33" />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={25.094}
        y1={25.668}
        x2={65.009}
        y2={25.668}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.006} stopColor="#FFB80B" />
        <Stop offset={0.388} stopColor="#FFB60C" />
        <Stop offset={0.579} stopColor="#FEAE10" />
        <Stop offset={0.727} stopColor="#FCA117" />
        <Stop offset={0.854} stopColor="#FA8E21" />
        <Stop offset={0.966} stopColor="#F7762E" />
        <Stop offset={1} stopColor="#F66D33" />
      </LinearGradient>
      <LinearGradient
        id="i"
        x1={45}
        y1={26}
        x2={45}
        y2={19.429}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#A09277" />
        <Stop offset={1} />
      </LinearGradient>
      <RadialGradient
        id="c"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(30.9529 0 0 31.8393 33.174 10.48)"
      >
        <Stop offset={0.006} stopColor="#9D9D94" />
        <Stop offset={0.202} stopColor="#DFD2C1" />
        <Stop offset={0.354} stopColor="#C2B5A2" />
        <Stop offset={0.492} stopColor="#D5C8B5" />
        <Stop offset={0.621} stopColor="#A09277" />
        <Stop offset={0.744} stopColor="#847B60" />
        <Stop offset={0.861} stopColor="#736950" />
        <Stop offset={0.943} stopColor="#A09277" />
      </RadialGradient>
      <RadialGradient
        id="f"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(9.78703 0 0 10.0673 28.74 29.026)"
      >
        <Stop offset={0.006} stopColor="#FFB80B" />
        <Stop offset={0.388} stopColor="#FFB60C" />
        <Stop offset={0.579} stopColor="#FEAE10" />
        <Stop offset={0.727} stopColor="#FCA117" />
        <Stop offset={0.854} stopColor="#FA8E21" />
        <Stop offset={0.966} stopColor="#F7762E" />
        <Stop offset={1} stopColor="#F66D33" />
      </RadialGradient>
    </Defs>
  </Svg>
);

export default SvgComponent;
