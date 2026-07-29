export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishDate: string; // ISO date
  author: string;
  body: string; // HTML string
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'what-is-a-fixed-indexed-annuity',
    title: 'What Is a Fixed Indexed Annuity and Is It Right for You?',
    description:
      'A plain-English breakdown of how fixed indexed annuities work, who they tend to fit, and the myths worth clearing up before you decide.',
    publishDate: '2026-07-29',
    author: 'Kayla Price',
    body: `
      <p>
        If you've started researching how to protect retirement savings from a market downturn,
        you've probably run into the term "fixed indexed annuity" — often shortened to FIA. It's
        one of the more commonly recommended tools for people who want growth potential without
        exposing their principal directly to the stock market. But it's also one of the more
        misunderstood products in retirement planning, partly because "annuity" gets used as a
        catch-all term for very different products. Let's break down what a fixed indexed annuity
        actually is, how it works, and how to think about whether it fits your situation.
      </p>

      <h2>The basic idea</h2>
      <p>
        A fixed indexed annuity is a contract between you and an insurance company — not a direct
        investment in the stock market. When you put money into an FIA, the insurance company
        credits interest to your contract based in part on the performance of a market index, such
        as the S&amp;P 500. Here's the key distinction: your principal is never directly invested
        in that index. The index is simply used as the reference point for calculating how much
        interest gets credited to your account.
      </p>
      <p>
        That structure is what allows an FIA to offer two things that don't usually go together:
        growth potential tied to market movement, and protection of your original deposit from
        market losses.
      </p>

      <h2>How interest is credited</h2>
      <p>
        Each contract period — often one year, though it varies by contract — the insurance
        company looks at how the linked index performed and calculates an interest credit based on
        the terms of your specific contract. Those terms usually include one or more of the
        following:
      </p>
      <ul>
        <li><strong>Cap rate:</strong> the maximum interest rate the contract can credit in a given period, even if the index gained more.</li>
        <li><strong>Participation rate:</strong> the percentage of the index's gain that gets credited to your account.</li>
        <li><strong>Spread:</strong> a percentage subtracted from the index's gain before interest is credited.</li>
      </ul>
      <p>
        If the index goes up, you may receive a positive interest credit, subject to those limits.
        If the index goes down, your account generally does not lose value due to that market
        decline — you simply receive no interest credit for that period, and your existing account
        value (including previously credited interest) stays protected. This "floor" is typically
        0%, meaning the worst a down year does is leave your balance unchanged, aside from any fees
        or riders attached to the contract.
      </p>

      <h2>Who tends to consider an FIA</h2>
      <p>
        Fixed indexed annuities aren't designed to replace every dollar of retirement savings, and
        they aren't meant to compete with aggressive growth investments. They're generally best
        suited for a portion of your savings — money you want to protect from market risk while
        still giving it a chance to grow more than a traditional fixed-rate product might offer.
        People often use FIAs as part of a broader "safe money" strategy, pairing them with other
        retirement assets that carry more growth potential and more risk.
      </p>
      <p>
        Because most FIAs include a multi-year surrender charge period — during which withdrawing
        more than a set percentage can trigger a penalty — they tend to fit best with money you
        don't expect to need immediate, unrestricted access to. Most contracts do allow
        penalty-free withdrawals up to a set percentage each year, even during that period.
      </p>

      <h2>Common myths, cleared up</h2>
      <p>
        A few misconceptions come up again and again in conversations about FIAs:
      </p>
      <ul>
        <li><strong>"It's the same as investing in the market."</strong> It isn't — your premium is never directly invested in the index.</li>
        <li><strong>"I could lose my principal if the market crashes."</strong> Generally not true for the principal protection feature — a down index year typically means $0 credited interest, not a loss due to market performance.</li>
        <li><strong>"All annuities work the same way."</strong> Fixed, fixed indexed, and variable annuities are structured very differently, and even within FIAs, terms vary significantly by carrier and contract.</li>
      </ul>

      <h2>How to evaluate one</h2>
      <p>
        If you're comparing fixed indexed annuities, it helps to ask: What's the surrender charge
        schedule? What crediting methods and current caps or participation rates apply? Is there an
        optional income rider, and what does it cost? What's the financial strength rating of the
        issuing insurance company? And does the timeline match money you won't need immediate
        access to? A licensed insurance agent can walk through these details across multiple
        carriers so you're comparing options on an apples-to-apples basis.
      </p>

      <div class="disclaimer">
        Fixed indexed annuities are insurance products, not investments. They are not FDIC insured
        and involve fees, surrender charges, and terms that vary by carrier and state. Consult with
        a licensed insurance agent to determine if an annuity is suitable for your specific
        situation.
      </div>

      <h2>FIAs vs. other retirement tools</h2>
      <p>
        It's worth understanding how an FIA compares to the other tools you might already be
        using. Compared to a traditional bank CD, an FIA typically offers higher growth potential
        in exchange for less liquidity during the surrender period. Compared to direct stock
        market investments, an FIA trades some upside potential for downside protection — you
        won't capture every point of a big market rally, but you also won't experience a
        market-driven loss. Compared to a variable annuity, which invests your premium directly in
        market subaccounts, an FIA keeps your principal out of direct market exposure entirely.
        None of these tools is inherently "better" — the right mix depends on how much of your
        savings you want exposed to market risk versus protected, and over what time horizon.
      </p>

      <h2>A realistic way to think about it</h2>
      <p>
        The simplest way to frame a fixed indexed annuity is as one tool among several in a
        retirement toolbox — not a replacement for every other kind of savings or investment. For
        the portion of your portfolio where protecting principal matters more than maximizing
        upside, an FIA can offer a reasonable middle ground between a low-yield savings account
        and market-based investing. For money you'll need in the short term, or money you're
        comfortable leaving exposed to market swings for potentially higher long-term growth, other
        vehicles may be a better fit. Working through that allocation with a licensed agent, rather
        than deciding in isolation, tends to produce a more balanced plan.
      </p>

      <p>
        Want a deeper walkthrough? Request our <a href="/guide">free PSG Annuity Guide</a>, read
        our full <a href="/annuities">Fixed Indexed Annuities</a> page, or
        <a href="/contact">schedule a free consultation</a> to talk through your specific
        situation.
      </p>
    `,
  },
  {
    slug: '5-retirement-income-mistakes-to-avoid',
    title: '5 Retirement Income Mistakes to Avoid',
    description:
      'The most common retirement income mistakes we see — from claiming Social Security too early to ignoring sequence of returns risk — and how to avoid them.',
    publishDate: '2026-07-15',
    author: 'Kayla Price',
    body: `
      <p>
        Saving for retirement and generating income once you're in retirement are two very
        different skills. Plenty of people who did everything right on the saving side still run
        into avoidable mistakes once it's time to actually turn those savings into a paycheck.
        Here are five of the most common retirement income mistakes, and how to steer around them.
      </p>

      <h2>1. Claiming Social Security too early without a plan</h2>
      <p>
        Claiming Social Security as early as possible, at age 62, permanently reduces your monthly
        benefit compared to waiting until your full retirement age — and delaying past full
        retirement age, up to age 70, permanently increases it. That doesn't mean everyone should
        wait until 70; the right claiming age depends on your health, other income sources, and
        whether you're still working. The mistake isn't claiming early — it's claiming early
        without running the numbers on how that decision affects your income for the rest of your
        life, especially for married couples where coordinating both spouses' claiming strategies
        can meaningfully change total lifetime income.
      </p>

      <h2>2. Ignoring sequence of returns risk</h2>
      <p>
        Sequence of returns risk is the danger of experiencing a market downturn early in
        retirement, right when you start withdrawing from your portfolio. Selling investments at a
        loss to fund withdrawals in those early years can permanently damage how long your savings
        last, even if the market fully recovers later — because you've locked in losses on money
        you've already spent. A bucket strategy, which separates near-term spending needs from
        long-term growth investments, is one common way to reduce this risk by avoiding forced
        sales during a downturn.
      </p>

      <h2>3. Treating all savings the same way</h2>
      <p>
        Not all of your retirement savings need to serve the same purpose. Money you'll need in the
        next one to three years, money you'll need in five to ten years, and money you won't touch
        for a decade or more all have different jobs to do, and arguably should be held
        differently. Lumping everything into one undifferentiated pile of investments — and
        drawing from whatever's convenient — makes it harder to manage risk and can leave you
        exposed at the worst possible time.
      </p>

      <h2>4. Overlooking guaranteed income options</h2>
      <p>
        Many retirees rely entirely on portfolio withdrawals to supplement Social Security, without
        considering options that create additional guaranteed income. A fixed indexed annuity with
        an optional income rider, for example, can convert a portion of your savings into a stream
        of income designed to last for your lifetime, regardless of market performance. That
        guaranteed floor can reduce the pressure on the rest of your portfolio and provide peace of
        mind that essential expenses are covered no matter what the market does.
      </p>

      <h2>5. Not planning for long-term care costs</h2>
      <p>
        Long-term care is one of the largest unplanned expenses in retirement, and Medicare
        generally does not cover ongoing custodial care. Failing to plan for this possibility can
        mean an extended care need drains savings that were meant to last decades. Planning ahead
        — whether through traditional long-term care insurance, a hybrid life/LTC policy, or simply
        setting aside a dedicated reserve — can prevent a health event from derailing an otherwise
        solid retirement income plan.
      </p>

      <h2>Bonus mistake: not revisiting the plan</h2>
      <p>
        A retirement income plan built once and never revisited is almost guaranteed to drift out
        of date. Tax laws change, market conditions shift, health changes, and personal goals
        evolve. What made sense the year you retired may not make sense five or ten years later.
        Building in a regular check-in — annually, or whenever a major life event occurs — helps
        catch small adjustments before they become larger problems, whether that's revisiting your
        withdrawal rate, reconsidering an income rider, or updating your long-term care approach as
        your health picture changes.
      </p>

      <h2>Putting it together</h2>
      <p>
        None of these mistakes are complicated to avoid once you know to look for them — the real
        risk is not knowing they exist until it's too late to course-correct. A retirement income
        plan built around your specific Social Security timing, guaranteed income options,
        investment structure, and long-term care strategy can help you avoid all five.
      </p>

      <div class="disclaimer">
        Fixed indexed annuities are insurance products, not investments. They are not FDIC insured
        and involve fees, surrender charges, and terms that vary by carrier and state. Consult with
        a licensed insurance agent to determine if an annuity is suitable for your specific
        situation.
      </div>

      <h2>A quick self-check</h2>
      <p>
        Before your next open enrollment or annual financial check-in, it's worth asking yourself a
        few questions: Do I know exactly when I'm planning to claim Social Security, and why? Do I
        know how much of my portfolio is in cash or stable holdings versus growth investments, and
        whether that split matches how soon I'll need the money? Do I have any source of guaranteed
        income beyond Social Security? And do I have a plan — any plan — for the possibility of
        needing long-term care? If any of those answers are "I'm not sure," that's usually a sign
        it's worth sitting down with a licensed agent to build out a written retirement income
        plan rather than continuing to wing it.
      </p>

      <p>
        Learn more on our <a href="/retirement-income">Retirement Income Planning</a> page, or
        <a href="/contact">schedule a free consultation</a> to build a plan around your specific
        situation.
      </p>
    `,
  },
];
