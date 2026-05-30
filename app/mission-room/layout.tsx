import { MissionRoomSidebar } from "./_components/mission-room-sidebar";

export default function MissionRoomLayout(props: LayoutProps<"/mission-room">) {
  return (
    <div className="flex h-screen bg-mdv-neutral-50 overflow-hidden">
      <MissionRoomSidebar />
      <main className="flex-1 overflow-y-auto flex flex-col min-w-0">
        {props.children}
      </main>
    </div>
  );
}
