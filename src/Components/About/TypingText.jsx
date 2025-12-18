import Typewriter from "typewriter-effect";

function TypingText() {
  return (
    <span className="typing-heading">
      <Typewriter
        options={{
          strings: [
            "𝑶𝒖𝒓 𝑺𝒕𝒐𝒓𝒚",
            "𝑨𝒃𝒐𝒖𝒕 𝑲𝑮𝒖𝒓𝒖𝒌𝒖𝒍’𝒔",
            "𝒀𝒐𝒖𝒓 𝑺𝒖𝒄𝒄𝒆𝒔𝒔 𝑱𝒐𝒖𝒓𝒏𝒆𝒚"
          ],
          autoStart: true,
          loop: true,
          delay: 60,
        }}
      />
    </span>
  );
}

export default TypingText;