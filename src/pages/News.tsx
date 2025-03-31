
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const News = () => {
  // Sample news data
  const newsItems = [
    {
      id: 1,
      title: "VybeCoding Launches New AI Tools",
      date: "June 15, 2023",
      summary: "New suite of AI-powered coding assistants available now for all members.",
      category: "Product"
    },
    {
      id: 2,
      title: "Upcoming Webinar: Machine Learning Basics",
      date: "June 22, 2023",
      summary: "Join us for an introductory session on implementing ML algorithms in your projects.",
      category: "Event"
    },
    {
      id: 3,
      title: "Community Spotlight: Best Projects of the Month",
      date: "June 10, 2023",
      summary: "Check out the most impressive community contributions from last month.",
      category: "Community"
    },
    {
      id: 4,
      title: "New Tutorial Series: Web3 Development",
      date: "June 5, 2023",
      summary: "Learn how to build decentralized applications in our latest tutorial series.",
      category: "Education"
    }
  ];

  return (
    <PageLayout>
      <div className="container py-8 px-4 md:px-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Latest News</h1>
          <p className="text-muted-foreground">Stay updated with the latest from VybeCoding</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {newsItems.map((item) => (
            <Card key={item.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{item.title}</CardTitle>
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    {item.category}
                  </span>
                </div>
                <CardDescription>{item.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{item.summary}</p>
                <button className="mt-4 text-primary hover:underline">Read More →</button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default News;
