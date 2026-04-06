import time
from pypresence import Presence

CLIENT_ID = "1490833413681184828"

RPC = Presence(CLIENT_ID)
RPC.connect()

# Calcula o timestamp de início para mostrar 492834 horas, 36 minutos e 27 segundos
# O tempo decorrido = (agora - start)
# Queremos que agora - start = 492834*3600 + 36*60 + 27
# Logo start = agora - esse valor
agora = int(time.time())
tempo_decorrido_segundos = 492834 * 3600 + 36 * 60 + 27  # ≈ 56 anos
start_time = agora - tempo_decorrido_segundos

RPC.update(
    details="Violador de Protocolos (X_X)",   # linha principal
    state="Owned Machines (192 de 200)",      # segunda linha
    start=start_time,                         # faz aparecer o contador
    large_image="logo",                       # nome da imagem grande
    large_text="Violador de Protocolos",
    small_image="maquina",                    # imagem pequena (opcional)
    small_text="Máquinas dominadas",
    buttons=[
        {"label": "My Server", "url": "https://discord.gg/URTfEEaxxG"},
        {"label": "My Channel", "url": "https://blackhubb.netlify.app/"}
    ]
)

print("✅ Status ativo! Deixe rodando. Ctrl+C para parar.")
while True:
    time.sleep(15)