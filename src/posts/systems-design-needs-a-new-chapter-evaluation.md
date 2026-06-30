---
layout: post.njk
title: "The Systems Design Textbook Needs a New Chapter: Evaluation"
subtitle: "AI systems force us to design how we measure success before we can compare architectures."
date: 2026-06-29
author: "Mariano Rozanski"
excerpt: "Modern systems design isn't only about choosing components. Once AI enters the picture, designing the evaluation framework becomes part of the architecture itself."
permalink: /posts/systems-design-needs-a-new-chapter-evaluation/
tags:
  - ai
  - systems-design
  - llm
  - architecture
  - evaluation
draft: false
---

One of my favorite moments in engineering is realizing that something we've accepted for years is quietly becoming outdated. Not wrong. Just incomplete.

That happened to me recently while thinking about AI systems.

Most of the systems design material we've all studied assumes something fundamental: before you design the system, you already know what "correct" looks like. The rest of the exercise is choosing components that satisfy the requirements and validating that they behave as expected.

That assumption starts to fall apart once a non-deterministic model becomes part of the architecture.

I don't think we've fully updated our mental model yet.

## Traditional systems start with a definition of correctness

In practice, the spec is usually clear enough to write a test against:

- A payment either succeeds or it doesn't.
- A cache either returns the expected value or it doesn't.
- A database query returns the right rows or it doesn't.

Once correctness is defined, the engineering work becomes selecting the right components, implementing the system, and verifying that it behaves according to the specification.

The metrics follow naturally.

- Latency
- Availability
- Throughput
- Error rates

Those metrics aren't particularly controversial because everyone already agrees on what success looks like.

## AI systems change the order of operations

Now imagine you're building a conversational language-learning coach.

Students speak with the system to practice a new language. The application listens, retrieves the lesson they've completed so far, responds naturally, and stores the conversation so teachers can review their progress later.

At first glance, this still looks like a familiar systems design problem.

- There are excellent speech recognition providers.
- Excellent language models.
- Excellent text-to-speech vendors.

Pick the best option for each stage and connect them together.

Except that isn't really the hard part. The hard part is deciding what "best" actually means.

## The architecture includes an evaluation system

Suppose you're considering several complete pipelines.

- One uses a traditional speech-to-text provider feeding a text-based LLM.
- Another uses an end-to-end audio model.
- A third mixes vendors because one has exceptional tool calling while another consistently produces more natural speech.

How do you compare them?

- You can certainly benchmark latency and cost.
- You can compare context windows.
- You can measure token usage.

Eventually, though, every interesting question becomes harder.

- Which pipeline gives better pronunciation feedback?
- Which one keeps conversations flowing naturally?
- Which one helps students learn more effectively?
- Which mistakes matter?

If I were designing this, I wouldn't start by choosing vendors. I'd start by building an evaluation framework. Every candidate pipeline becomes a hypothesis.

- Feed each one the same representative conversations.
- Capture every output.
- Measure objective signals like latency and cost.
- Run automatic quality checks where possible.
- Use LLM-based judges when appropriate.
- Review ambiguous cases with humans.
- Aggregate the results into something that supports engineering decisions.

The goal is to build a repeatable process for discovering which complete system performs best for your users.

That distinction changes the architecture.

![Several voice pipelines feeding into a shared evaluation framework](/assets/images/posts/evaluation-framework.svg)

## Traditional metrics eventually stop answering the question you care about

Speech recognition already has established metrics. Word Error Rate, or WER, is probably the best known. It measures how closely a transcription matches a reference transcript. It's a perfectly reasonable metric. Until it isn't.

Imagine a beginner Spanish student says:

> "Yo... eh... comer..."

- Should the transcription preserve every hesitation?
- Should it normalize the sentence?
- Should it infer the intended verb?
- Should it flag the grammatical mistake?

Every answer could be correct depending on the lesson.

- During a pronunciation exercise, preserving mistakes may be essential.
- During a fluency exercise, interrupting the student might be counterproductive.
- During teacher review, detailed transcripts become much more valuable than polished ones.

WER doesn't capture any of those tradeoffs.

I've seen this pattern repeat itself in enough AI systems that it now feels predictable. Teams borrow a metric from a neighboring field because it's available. Eventually they realize they're optimizing the metric instead of the user outcome. That's usually the point where the engineering work becomes genuinely interesting.

## Evaluation becomes part of the architecture

Thinking about AI systems this way changed how I approach system design.

Instead of thinking about evaluation as something that happens after implementation, I think of it as another subsystem that deserves its own design.

- Representative datasets
- Replay infrastructure
- Prompt versioning
- Regression suites
- Human labeling workflows
- Experiment tracking
- Dashboards

Without those tools, vendor comparisons aren't repeatable. You can't verify that a release improved quality. And you won't know when something got worse until someone reports it.

## A different design process

The systems design process I learned looked something like this.

1. Define correct behavior.
2. Build the system.
3. Verify that it behaves correctly.

For AI systems, I've found myself following a different sequence.

1. Understand how users experience failure.
2. Decide what success actually looks like.
3. Design a way to measure that success.
4. Build candidate systems.
5. Compare them.
6. Iterate on both the implementation and the evaluation framework.

The evaluation framework becomes one of the first architectural decisions.

## Maybe this belongs in the systems design textbook

Distributed systems haven't become less important. Caches, queues, databases, consistency models, and scalability remain fundamental skills. I just think there's another architectural concern that deserves a place beside them.

When AI becomes part of the system, designing the production pipeline is only half the problem. The other half is designing the system that tells you whether the production pipeline is actually improving or even doing its job.

Lately, that's become one of the most interesting new engineering problems I've worked on. And I have a feeling it will become a common systems design interview question before long.
