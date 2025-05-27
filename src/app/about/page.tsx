import { Container, Title, Text, Divider, Stack } from "@mantine/core";

export default function AboutPage() {
  return (
    <main className="py-12 px-6">
      <Container size="sm">
        <Stack gap="xl">
          <Title order={1}>About This Project</Title>

          <Text size="lg">
            This project is a lovingly crafted guide to Dublin&rsquo;s diverse
            and charming neighborhoods. Whether you are a curious traveler, a
            local explorer, or someone considering a move, you will find
            helpful, up-to-date info curated with a local touch.
          </Text>

          <Divider my="sm" label="What You'll Find" labelPosition="center" />

          <Text fw={400} size="lg" mt="sm">
            We cover everything from local history and hidden gems, crime and
            safety ratings (visually represented), rent and house prices, top
            places to eat, walk, and hang out, and vibe ratings for each area.
          </Text>
        </Stack>
      </Container>
    </main>
  );
}
