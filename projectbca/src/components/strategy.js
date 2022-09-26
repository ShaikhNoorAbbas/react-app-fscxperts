import React from "react";
import "./strategy.css";
import bearish3 from "../images/bearish3continues.png";
import bearishh from "../images/bearishh.png";
import bhc from "../images/bhc.png";
import dcc from "../images/dcc.png";
import ebl from "../images/ebl.png";
import eds from "../images/eds.png";
import es from "../images/es.png";
import gd from "../images/gd.png";
import slb from "../images/slb.png";
import threebs from "../images/3bs.png";
import ih from "../images/ih.png";
import ss from "../images/ss.png";
import lus from "../images/lus.png";
import tt from "../images/tt.png";
import hm from "../images/hm.png";
import bullish3 from "../images/b3continues.png"
import bh from "../images/bh.png"
import bhc1 from "../images/bhc1.png";
import pl from "../images/pl.png";
import ebl1 from "../images/ebl1.png";
import mds from "../images/mds.png";
import ms from "../images/ms.png";
import dd from "../images/dd.png";
import sbl1 from "../images/sbl1.png";
import onl from "../images/onl.png";
import bs1 from "../images/3bs1.png";
import ih1 from "../images/ih1.png";
import lls from "../images/lls.png";
import tb from "../images/tb.png";
import h from "../images/h.png";

export default function Strategy() {
  return (
    <div className="strategy">
      <div className="sthead">Trading Strategies</div>
      <p className="sttableh">Bearish Trend Pattern :</p>
      <table className="sttable">
        <th className="th1">ID</th>
        <th className="th1">Title</th>
        <th className="th1">Strategies</th>
        <th className="th1">Explanation</th>
        <tr className="strow">
          <td className="stcol stid">1</td>
          <td className="stcol sttitle">Bearish lll (continues)</td>
          <td className="stcol">
            <img src={bearish3} alt="bearish3" className="stimg" />
          </td>
          <td className="stcol stexp">
            The Bearish 3-Method Formation candlestick pattern consists of a
            long bearish candle that indicates a strong directional move,
            followed by three small recovery candles, that are contained within
            the body of the first bearish candle. The last candle is a long
            bearish candle which re-enforces the continuation of the bearish
            move. The three recovery candles can be bullish or bearish candles,
            with the key emphasis on the recovery candles being contained within
            the body of the first bearish candle. It is very rare to see the
            pattern on longer interval periods of for example 1 day, and more
            commonly found on shorter intervals such as 1 minute.
          </td>
        </tr>
        <tr className="strow">
          <td className="stcol stid">2</td>
          <td className="stcol sttitle">Bearish Harami</td>
          <td className="stcol">
            <img src={bearishh} alt="bearishh" className="stimg" />
          </td>
          <td className="stcol stexp">
            A bearish harami is a two bar Japanese candlestick pattern that
            suggests prices may soon reverse to the downside. The pattern
            consists of a long white candle followed by a small black candle.
            The opening and closing prices of the second candle must be
            contained within the body of the first candle. An uptrend precedes
            the formation of a bearish harami.The size of the second candle
            determines the pattern's potency; the smaller it is, the higher the
            chance there is of a reversal occurring. The opposite pattern to a
            bearish harami is a bullish harami, which is preceded by a downtrend
            and suggests prices may reverse to the upside.
          </td>
        </tr>
        <tr className="strow">
          <td className="stcol stid">3</td>
          <td className="stcol sttitle">Bearish Harami Cross</td>
          <td className="stcol">
            <img src={bhc} alt="bhc" className="stimg" />
          </td>
          <td className="stcol stexp">
            A harami cross is a Japanese candlestick pattern that consists of a
            large candlestick that moves in the direction of the trend, followed
            by a small doji candlestick. The doji is completely contained within
            the prior candlestick's body. The harami cross pattern suggests that
            the previous trend may be about to reverse. The pattern can be
            either bullish or bearish. The bullish pattern signals a possible
            price reversal to the upside, while the bearish pattern signals a
            possible price reversal to the downside.A bearish harami cross is a
            large up candle followed by a doji. It occurs during an uptrend. The
            bearish pattern is confirmed by a price move lower following the
            pattern.
          </td>
        </tr>
        <tr className="strow">
          <td className="stcol stid">4</td>
          <td className="stcol sttitle">Dark Cloud Cover</td>
          <td className="stcol">
            <img src={dcc} alt="dcc" className="stimg" />
          </td>
          <td className="stcol stexp">
            Dark Cloud Cover is a bearish reversal candlestick pattern where a
            down candle (typically black or red) opens above the close of the
            prior up candle (typically white or green), and then closes below
            the midpoint of the up candle. The pattern is composed of a bearish
            candle that opens above but then closes below the midpoint of the
            prior bullish candle. Both candles should be relatively large,
            showing strong participation by traders and investors. When the
            pattern occurs with small candles it is typically less significant.
            Traders typically see if the candle following the bearish candle
            also shows declining prices. A further price decline following the
            bearish candle is called confirmation.
          </td>
        </tr>
        <tr className="strow">
          <td className="stcol stid">5</td>
          <td className="stcol sttitle">Engulfing Bearish Line</td>
          <td className="stcol">
            <img src={ebl} alt="ebl" className="stimg" />
          </td>
          <td className="stcol stexp">
            A bearish engulfing pattern is a technical chart pattern that
            signals lower prices to come. The pattern consists of an up (white
            or green) candlestick followed by a large down (black or red)
            candlestick that eclipses or "engulfs" the smaller up candle A
            bearish engulfing pattern can occur anywhere, but it is more
            significant if it occurs after a price advance. This could be an
            uptrend or a pullback to the upside with a larger downtrend.
            Ideally, both candles are of substantial size relative to the price
            bars around them. Two very small bars may create an engulfing
            pattern, but it is far less significant than if both candles are
            large. The real body—the difference between the open and close
            price—of the candlesticks is what matters. The real body of the down
            candle must engulf the up candle. The pattern has far less
            significance in choppy markets.
          </td>
        </tr>
        <tr className="strow">
          <td className="stcol stid">6</td>
          <td className="stcol sttitle">Evening Doji Star</td>
          <td className="stcol">
            <img src={eds} alt="eds" className="stimg" />
          </td>
          <td className="stcol stexp">
            The Evening Doji Star is a bearish reversal pattern, being very
            similar to the Evening Star. The only difference is that the Evening
            Doji Star needs to have a doji candle (except the Four-Price Doji)
            on the second line. The doji candle (second line) should not be
            preceded by or followed by a price gap. If a lower shadow of a doji
            candle would be placed above the first and the second line shadow we
            would deal with the Bearish Abandoned Baby pattern. It happens that
            two first candles are forming the Bearish Doji Star pattern.The
            pattern, as every other candlestick pattern, should be confirmed on
            the next candles by breaking out of the support zone or a trendline.
            If the occurrence is confirmed, then its third line may act as a
            resistance area. It also happens, however, that the pattern is
            merely a short pause prior further price increases.
          </td>
        </tr>
        <tr className="strow">
          <td className="stcol stid">7</td>
          <td className="stcol sttitle">Evening Star</td>
          <td className="stcol">
            <img src={es} alt="es" className="stimg" />
          </td>
          <td className="stcol stexp">
            An evening star is a stock-price chart pattern used by technical
            analysts to detect when a trend is about to reverse. It is a bearish
            candlestick pattern consisting of three candles: a large white
            candlestick, a small-bodied candle, and a red candle.Evening star
            patterns are associated with the top of a price uptrend, signifying
            that the uptrend is nearing its end. The opposite of the evening
            star is the morning star pattern, which is viewed as a bullish
            indicator. An evening star is a candlestick pattern used by
            technical analysts to predict future price reversals to the
            downside. Although it is rare, the evening star pattern is
            considered by traders to be a reliable technical indicator. The
            evening star is the opposite of the morning star pattern. The two
            are bearish and bullish indicators, respectively.
          </td>
        </tr>
        <tr className="strow">
          <td className="stcol stid">8</td>
          <td className="stcol sttitle">Gravestone Doji</td>
          <td className="stcol">
            <img src={gd} alt="gd" className="stimg" />
          </td>
          <td className="stcol stexp">
            A gravestone doji is a bearish reversal candlestick pattern that is
            formed when the open, low, and closing prices are all near each
            other with a long upper shadow. The long upper shadow suggests that
            the bullish advance in the beginning of the session was overcome by
            bears by the end of the session, which often comes just before a
            longer term bearish downtrend.A gravestone doji is a bearish pattern
            that suggests a reversal followed by a downtrend in the price
            action. A gravestone pattern can be used as a sign to take profits
            on a bullish position or enter a bearish trade. The opposite of a
            gravestone doji is a dragonfly doji.
          </td>
        </tr>
        <tr className="strow">
          <td className="stcol stid">9</td>
          <td className="stcol sttitle">Separating Line Bearish</td>
          <td className="stcol">
            <img src={slb} alt="slb" className="stimg" />
          </td>
          <td className="stcol stexp">
            Bearish Separating Line is a bearish continuation pattern. It is
            exactly opposite to Bullish Separating Line. In this pattern, first
            candle is a white one in a downtrend, followed by lower gap opening
            next day. Second day candle is a large black one, whose opening
            level is equal to previous day's opening level. It closes at lower
            levels. Bearish separating lines should be traded during a strong
            downtrend. Traders should make sure that the two candlesticks in the
            formation are of a decent size. A short position can be taken after
            the close of the second candlestick.
          </td>
        </tr>
        <tr className="strow">
          <td className="stcol stid">10</td>
          <td className="stcol sttitle">3 Bullish Soldier</td>
          <td className="stcol">
            <img src={threebs} alt="threebs" className="stimg" />
          </td>
          <td className="stcol stexp">
            Three bullish soldiers is a bullish candlestick pattern that is used
            to predict the reversal of the current downtrend in a pricing chart.
            The pattern consists of three consecutive long-bodied candlesticks
            that open within the previous candle's real body and a close that
            exceeds the previous candle's high. These candlesticks should not
            have very long shadows and ideally open within the real body of the
            preceding candle in the pattern.Three bullish soldiers are
            considered a reliable reversal pattern when confirmed by other
            technical indicators like the relative strength index (RSI). The
            size of the candles and the length of the shadow is used to judge
            whether there is a risk of retracement. The opposite pattern of
            three bullish soldiers is three black crows, which indicates a
            reversal of an uptrend.
          </td>
        </tr>
        <tr className="strow">
          <td className="stcol stid">11</td>
          <td className="stcol sttitle">Inverted Hammer</td>
          <td className="stcol">
            <img src={ih} alt="ih" className="stimg" />
          </td>
          <td className="stcol stexp">
            The pattern is made up of a candle with a small lower body and a
            long upper wick which is at least two times as large as the short
            lower body. The body of the candle should be at the low end of the
            trading range and there should be little or no lower wick in the
            candle. The long upper wick of the candlestick pattern indicates
            that the buyers drove prices up at some point during the period in
            which the candle was formed, but encountered selling pressure which
            drove prices back down to close near to where they opened. When
            encountering an inverted hammer, traders often check for a higher
            open and close on the next period to validate it as a bullish
            signal.
          </td>
        </tr>
        <tr className="strow">
          <td className="stcol stid">12</td>
          <td className="stcol sttitle">Shooting Star</td>
          <td className="stcol">
            <img src={ss} alt="ss" className="stimg" />
          </td>
          <td className="stcol stexp">
            A shooting star is a bearish candlestick with a long upper shadow,
            little or no lower shadow, and a small real body near the low of the
            day. It appears after an uptrend.1 Said differently, a shooting star
            is a type of candlestick that forms when a security opens, advances
            significantly, but then closes the day near the open again. A
            shooting star occurs after an advance and indicates the price could
            start falling.1 The formation is bearish because the price tried to
            rise significantly during the day, but then the sellers took over
            and pushed the price back down toward the open. Traders typically
            wait to see what the next candle (period) does following a shooting
            star. If the price declines during the next period they may sell or
            short. If the price rises after a shooting star, the formation may
            have been a false signal or the candle is marking a potential
            resistance area around the price range of the candle.
          </td>
        </tr>
        <tr className="strow">
          <td className="stcol stid">13</td>
          <td className="stcol sttitle">Long Upper Shadow</td>
          <td className="stcol">
            <img src={lus} alt="lus" className="stimg" />
          </td>
          <td className="stcol stexp">
            On the TimeToTrade charts, an indicator can be added to detect Long
            Upper Shadow Candlestick patterns. The indicator can then be used to
            execute trades, provide an Email or SMS text message notification
            when your Candlestick chart patterns have been met or backtest
            trading strategies.A bullish or bearish candlestick whereby the
            length of the tail / lower shadow is at least two thirds of the
            total shadow length. It is considered a weak bearish pattern and
            takes on greater significance when the market is over bought or at
            resistance.
          </td>
        </tr>
        <tr className="strow">
          <td className="stcol stid">14</td>
          <td className="stcol sttitle">Tweezer Tops</td>
          <td className="stcol">
            <img src={tt} alt="tt" className="stimg" />
          </td>
          <td className="stcol stexp">
            A Tweezer Top is a bearish reversal pattern seen at the top of
            uptrends and consists of two Japanese candlesticks with matching
            tops. The matching tops are usually composed of shadows (or wicks)
            but can be the candle's bodies as well. A Tweezer Top occurs during
            an uptrend when buyers push prices higher, often ending the session
            near the highs, but were not able to push the top any
            further.Tweezer Tops are considered to be short-term bearish
            reversal patterns that signal a market top.To identify a Tweezer
            Top, look for the following criteria: There must be two or more
            consecutive candles of either color. A clear uptrend should be
            present. Both candles must reach the same high point.
          </td>
        </tr>
        <tr className="strow">
          <td className="stcol stid">15</td>
          <td className="stcol sttitle">Hanging Man</td>
          <td className="stcol">
            <img src={hm} alt="hm" className="stimg" />
          </td>
          <td className="stcol stexp">
            A hanging man is a bearish reversal candlestick pattern that occurs
            after a price advance. The advance can be small or large, but should
            be composed of at least a few price bars moving higher overall. The
            candle must have a small real body and a long lower shadow that is
            at least twice the size as the real body. There is little or no
            upper shadow. The close of the hanging man can be above or below
            open, it just needs to be near the open so the real body is small.
            The long lower shadow of the hanging man shows that sellers were
            able to take control for part of the trading period. The hanging man
            pattern is just a warning. The price must move lower on the next
            candle in order for the hanging man to be a valid reversal pattern.
            This is called confirmation. Traders typically exit long trades or
            enter short trades during or after the confirmation candle, not
            before.
          </td>
        </tr>
      </table>
      <p className="sttableh">Bullish Trend Pattern :</p>
      <table className="sttable">
        <th className="th1">ID</th>
        <th className="th1">Title</th>
        <th className="th1">Strategies</th>
        <th className="th1">Explanation</th>
        <tr className="strow">
          <td className="stcol stid">1</td>
          <td className="stcol sttitle">Bullish lll (continues)</td>
          <td className="stcol">
            <img src={bullish3} alt="bullish3" className="stimg" />
          </td>
          <td className="stcol stexp">
            On the TimeToTrade charts, an indicator can be added to detect
            Bullish 3-Method Formation Candlestick patterns. The indicator can
            then be used to execute trades, provide an Email or SMS text message
            notification when your Candlestick chart patterns have been met or
            backtest trading strategies.Bullish 3-Method Formation consists of a
            long bullish candle that indicates a strong directional move,
            followed by three small recovery candles, that are contained within
            the body of the first bearish candle. The last candle is a long
            bullish candle which re-enforces the continuation of the bullish
            move. The three recovery candles can be bullish or bearish candles,
            with the key emphasis on the recovery candles being contained within
            the body of the first bullish candle.
          </td>
        </tr>
        <tr className="strow">
          <td className="stcol stid">2</td>
          <td className="stcol sttitle">Bullish Harami</td>
          <td className="stcol">
            <img src={bh} alt="bh" className="stimg" />
          </td>
          <td className="stcol stexp">
            A bullish harami is a basic candlestick chart pattern indicating
            that a bearish trend in an asset or market may be reversing.A
            bullish harami is a candlestick chart indicator used for spotting
            reversals in a bear trend. It is generally indicated by a small
            increase in price (signified by a white candle) that can be
            contained within the given equity's downward price movement
            (signified by black candles) from the past couple of days.For a
            bullish harami to appear, a smaller body on the subsequent doji will
            close higher within the body of the previous day's candle, signaling
            a greater likelihood that a reversal will occur.
          </td>
        </tr>
        <tr className="strow">
          <td className="stcol stid">3</td>
          <td className="stcol sttitle">Bullish Harami Cross</td>
          <td className="stcol">
            <img src={bhc1} alt="bhc1" className="stimg" />
          </td>
          <td className="stcol stexp">
            A harami cross is a Japanese candlestick pattern that consists of a
            large candlestick that moves in the direction of the trend, followed
            by a small doji candlestick. The doji is completely contained within
            the prior candlestick's body. The harami cross pattern suggests that
            the previous trend may be about to reverse. The pattern can be
            either bullish or bearish. The bullish pattern signals a possible
            price reversal to the upside, while the bearish pattern signals a
            possible price reversal to the downside.A bullish harami cross is a
            large down candle followed by a doji. It occurs during a downtrend.
            The bullish harami cross is confirmed by a price move higher
            following the pattern. A bearish harami cross is a large up candle
            followed by a doji. It occurs during an uptrend. The bearish pattern
            is confirmed by a price move lower following the pattern.
          </td>
        </tr>
        <tr className="strow">
          <td className="stcol stid">4</td>
          <td className="stcol sttitle">Piercing Line</td>
          <td className="stcol">
            <img src={pl} alt="pl" className="stimg" />
          </td>
          <td className="stcol stexp">
            A piercing pattern is a two-day, candlestick price pattern that
            marks a potential short-term reversal from a downward trend to an
            upward trend. The pattern includes the first day opening near the
            high and closing near the low with an average or larger-sized
            trading range. It also includes a gap down after the first day where
            the second day begins trading, opening near the low and closing near
            the high. The close should also be a candlestick that covers at
            least half of the upward length of the previous day's red
            candlestick body. The piercing pattern is a two-day candle pattern
            that implies a potential reversal from a downward trend to an upward
            trend. This candle pattern typically only forecasts about five days
            out. Three characteristics of this pattern include a downward trend
            before the pattern, a gap after the first day, and a strong reversal
            as the second candle in the pattern.
          </td>
        </tr>
        <tr className="strow">
          <td className="stcol stid">5</td>
          <td className="stcol sttitle">Engulfing Bullish Line</td>
          <td className="stcol">
            <img src={ebl1} alt="ebl1" className="stimg" />
          </td>
          <td className="stcol stexp">
            A bullish engulfing pattern is a white candlestick that closes
            higher than the previous day's opening after opening lower than the
            previous day's close. It can be identified when a small black
            candlestick, showing a bearish trend, is followed the next day by a
            large white candlestick, showing a bullish trend, the body of which
            completely overlaps or engulfs the body of the previous day's
            candlestick.A bullish engulfing pattern is a candlestick pattern
            that forms when a small black candlestick is followed the next day
            by a large white candlestick, the body of which completely overlaps
            or engulfs the body of the previous day's candlestick. Bullish
            engulfing patterns are more likely to signal reversals when they are
            preceded by four or more black candlesticks. Investors should look
            not only to the two candlesticks which form the bullish engulfing
            pattern but also to the preceding candlesticks.
          </td>
        </tr>
        <tr className="strow">
          <td className="stcol stid">6</td>
          <td className="stcol sttitle">Morning Doji Star</td>
          <td className="stcol">
            <img src={mds} alt="mds" className="stimg" />
          </td>
          <td className="stcol stexp">
            The Morning Doji Star is a bullish reversal pattern, being very
            similar to the Morning Star. The only difference is that the Morning
            Doji Star needs to have a doji candle (except the Four-Price Doji)
            on the second line. The doji candle (second line) should not be
            preceded by or followed by a price gap. If a lower shadow of a doji
            candle would be placed below the first and the second line shadow we
            would deal with the Bullish Abandoned Baby pattern. It happens that
            two first candles are forming the Bullish Doji Star pattern.The
            pattern, as every other candlestick pattern, should be confirmed on
            the next candles by breaking out of the resistance zone or a
            trendline. If the occurrence is confirmed, then its third line may
            act as a support area. It also happens, however, that the pattern is
            merely a short pause prior further price decrease.
          </td>
        </tr>
        <tr className="strow">
          <td className="stcol stid">7</td>
          <td className="stcol sttitle">Morning Star</td>
          <td className="stcol">
            <img src={ms} alt="ms" className="stimg" />
          </td>
          <td className="stcol stexp">
            A morning star is a visual pattern consisting of three candlesticks
            that are interpreted as bullish signs by technical analysts. A
            morning star forms following a downward trend and it indicates the
            start of an upward climb. It is a sign of a reversal in the previous
            price trend. Traders watch for the formation of a morning star and
            then seek confirmation that a reversal is indeed occurring using
            additional indicators.A morning star is a visual pattern made up of
            a tall black candlestick, a smaller black or white candlestick with
            a short body and long wicks, and a third tall white candlestick. The
            middle candle of the morning star captures a moment of market
            indecision where the bears begin to give way to bulls. The third
            candle confirms the reversal and can mark a new uptrend. The
            opposite pattern to a morning star is the evening star, which
            signals a reversal of an uptrend into a downtrend.
          </td>
        </tr>
        <tr className="strow">
          <td className="stcol stid">8</td>
          <td className="stcol sttitle">Dragonfly Doji</td>
          <td className="stcol">
            <img src={dd} alt="dd" className="stimg" />
          </td>
          <td className="stcol stexp">
            A Dragonfly Doji is a type of candlestick pattern that can signal a
            potential reversal in price to the downside or upside, depending on
            past price action. It's formed when the asset's high, open, and
            close prices are the same. The long lower shadow suggests that there
            was aggressive selling during the period of the candle, but since
            the price closed near the open it shows that buyers were able to
            absorb the selling and push the price back up.A dragonfly doji can
            occur after a price rise or a price decline. The open, high, and
            close prices match each other, and the low of the period is
            significantly lower than the former three. This creates a "T" shape.
            The appearance of a dragonfly doji after a price advance warns of a
            potential price decline. A move lower on the next candle provides
            confirmation.
          </td>
        </tr>
        <tr className="strow">
          <td className="stcol stid">9</td>
          <td className="stcol sttitle">Separating Line Bullish</td>
          <td className="stcol">
            <img src={sbl1} alt="sbl1" className="stimg" />
          </td>
          <td className="stcol stexp">
            The Bullish Separating Lines is a two-line bullish continuation
            pattern. Its both candles appear as a long line. The first line is a
            black candle whereas the second one is white. The name of the
            pattern comes from the fact that the opening price of the first
            candle is equal to the opening price of the second line, i.e.
            candles are separating in opposite directions.The pattern is very
            rare.identify :First candle a candle in an uptrend black body
            appears as a long line Second candle white body the opening price is
            equal to the previous opening price.
          </td>
        </tr>
        <tr className="strow">
          <td className="stcol stid">10</td>
          <td className="stcol sttitle">3 Bearish Soldier</td>
          <td className="stcol">
            <img src={bs1} alt="threebs1" className="stimg" />
          </td>
          <td className="stcol stexp">
            Three black crows is a phrase used to describe a bearish candlestick
            pattern that may predict the reversal of an uptrend. Candlestick
            charts show the day's opening, high, low, and closing prices for a
            particular security. For stocks moving higher, the candlestick is
            white or green. When moving lower, they are black or red. The black
            crow pattern consists of three consecutive long-bodied candlesticks
            that have opened within the real body of the previous candle and
            closed lower than the previous candle. Often, traders use this
            indicator in conjunction with other technical indicators or chart
            patterns as confirmation of a reversal.Three black crows is a
            bearish candlestick pattern used to predict the reversal of a
            current uptrend. Traders use it alongside other technical indicators
            such as the relative strength index (RSI).
          </td>
        </tr>
        <tr className="strow">
          <td className="stcol stid">11</td>
          <td className="stcol sttitle">Inverted Hammer</td>
          <td className="stcol">
            <img src={ih1} alt="ih1" className="stimg" />
          </td>
          <td className="stcol stexp">
            The Inverted Hammer is a signal of bullish reversal after a
            downtrend. It tells the traders that the bulls are now willing to
            buy the stock at the fallen prices. After the downtrend, there is
            pressure from the buyers in the market to raise the stock prices. It
            tells the sellers in the market to exit as they may be a bullish
            reversal and tells the buyers to enter their buying position as the
            bullish trend is about to start. But remember to confirm this signal
            with other technical indicators as it may sometimes fall signals.
            You can also wait for the next trading day to confirm the beginning
            of the bullish trend. If in the next trading session the opening
            price is more than the closing price of the inverted hammer
            candlestick then you can enter the buy position.
          </td>
        </tr>
        <tr className="strow">
          <td className="stcol stid">12</td>
          <td className="stcol sttitle">On-Neck Line</td>
          <td className="stcol">
            <img src={onl} alt="onl" className="stimg" />
          </td>
          <td className="stcol stexp">
            The on neck pattern occurs when a long real bodied down candle is
            followed by a smaller real bodied up candle that gaps down on the
            open but then closes near the prior candle's close. The pattern is
            called a neckline because the two closing prices are the same (or
            almost the same) across the two candles, forming a horizontal
            neckline. The pattern is theoretically considered a continuation
            pattern, indicating that the price will continue lower following the
            pattern. In reality, that only occurs about half the time.
            Therefore, the pattern also often indicates at least a short-term
            reversal higher.The pattern is created by a long real bodied down
            candle, followed by a smaller real bodied up candle with the same
            close as the prior candle. In theory, the pattern is a continuation
            pattern to the downside, but in reality, it acts as a continuation
            pattern and a reversal pattern with nearly the same frequency.
            Trading on the pattern could result in any number of variations.
          </td>
        </tr>
        <tr className="strow">
          <td className="stcol stid">13</td>
          <td className="stcol sttitle">Long Lower Shadow</td>
          <td className="stcol">
            <img src={lls} alt="lls" className="stimg" />
          </td>
          <td className="stcol stexp">
            The long lower shadow candlestick is a technical indicator that is
            used by traders to identify a reversal in the market trends. The
            pattern features a short body on the upper end of a candle, with a
            long lower shadow. The lower shadow in the candle is typically at
            least two times longer than the length of the body. The presence of
            a long lower shadow candlestick during either a bullish or a bearish
            trend is indicative of an impending trend reversal. When a long
            lower shadow candlestick appears at the top of a bullish trend, it
            is referred to as the hanging man, and is construed as an indicator
            of a bearish trend reversal. Similarly, when a long lower shadow
            candlestick appears at the bottom of a bearish trend, it is referred
            to as the hammer, and is construed as an indicator of a bullish
            trend reversal.
          </td>
        </tr>
        <tr className="strow">
          <td className="stcol stid">14</td>
          <td className="stcol sttitle">Tweezer Bottoms</td>
          <td className="stcol">
            <img src={tb} alt="tb" className="stimg" />
          </td>
          <td className="stcol stexp">
            A Tweezer Bottom is a bullish reversal pattern seen at the bottom of
            downtrends and consists of two Japanese candlesticks with matching
            bottoms. The matching bottoms are usually composed of shadows (or
            wicks) but can be the candle's bodies as well. A Tweezer Bottom
            occurs during a downtrend when sellers push prices lower, often
            ending the session near the lows, but were not able to push the
            bottom any further. Tweezer Bottoms are considered to be short-term
            bullish reversal patterns that signal a market bottom.Recognition
            Criteria To identify a Tweezer Bottom, look for the following
            criteria: There must be two or more consecutive candles of either
            color. A clear downtrend should be present. Both candles must reach
            the same low point.
          </td>
        </tr>
        <tr className="strow">
          <td className="stcol stid">15</td>
          <td className="stcol sttitle">Hammer</td>
          <td className="stcol">
            <img src={h} alt="h" className="stimg" />
          </td>
          <td className="stcol stexp">
            The Hammer candlestick formation is viewed as a bullish reversal
            candlestick pattern that mainly occurs at the bottom of downtrends.
            The Hammer helps traders visualize where support and demand are
            located. After a downtrend, the Hammer can signal to traders that
            the downtrend could be over and that short positions could
            potentially be covered.Green Hammer: If the Hammer is green, it is
            considered a stronger formation than a red hammer because the bulls
            were able to reject the bears completely. Also, the bulls were able
            to push up the price past the opening price.Is a Red Hammer Bullish?
            A red Hammer candlestick pattern is still a bullish sign. The bulls
            were still able to counteract the bears, but they were just not able
            to bring the price back up to the opening price.
          </td>
        </tr>
      </table>
    </div>
  );
}
